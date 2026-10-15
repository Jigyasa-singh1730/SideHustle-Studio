
import { pipeline, env } from
  "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2";

env.allowLocalModels = false;
env.useBrowserCache = true;

const form = document.getElementById("listingForm");
const status = document.getElementById("status");
const output = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");

let aiModel = null;

async function loadAI() {
  if (!aiModel) {
    status.innerHTML = `
      <div class="magic-star">✦</div>
      <h3>Waking up your AI...</h3>
      <p>Loading the open-weight model. First use may take a while.</p>
    `;

    aiModel = await pipeline(
      "text2text-generation",
      "Xenova/flan-t5-small"
    );
  }

  return aiModel;
}

async function askAI(prompt, tokens = 100) {
  const model = await loadAI();
  const result = await model(prompt, {
    max_new_tokens: tokens,
    do_sample: false
  });

  return result[0].generated_text.trim();
}

async function generateListing(data) {
  const context = `
    Product: ${data.product}
    Features: ${data.details}
    Platform: ${data.platform}
    Tone: ${data.tone}
  `;

  const title = await askAI(
    `Write one concise product listing title.
     Use only the supplied product facts.
     Return only the title. ${context}`,
    45
  );

  status.innerHTML = `
    <div class="magic-star">✦</div>
    <h3>Crafting your description...</h3>
    <p>Your AI assistant is preparing your listing.</p>
  `;

  const description = await askAI(
    `Write a clear, attractive product description
     in a ${data.tone} tone for ${data.platform}.
     Use only supplied facts. Do not invent product claims.
     Return plain text. ${context}`,
    140
  );

  status.innerHTML = `
    <div class="magic-star">✦</div>
    <h3>Almost there...</h3>
    <p>Preparing relevant search keywords.</p>
  `;

  const keywords = await askAI(
    `Suggest 8 short search keywords for this product.
     Separate keywords with commas.
     Return no explanation. ${context}`,
    55
  );

  return { title, description, keywords };
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    product: document.getElementById("product").value.trim(),
    details: document.getElementById("details").value.trim(),
    platform: document.getElementById("platform").value,
    tone: document.getElementById("tone").value
  };

  if (!data.product || !data.details) return;

  generateBtn.disabled = true;
  generateBtn.innerHTML = "<span>✦</span> Creating magic...";

  output.hidden = true;
  status.hidden = false;

  try {
    const result = await generateListing(data);

    document.getElementById("titleOutput").textContent =
      result.title;

    document.getElementById("descriptionOutput").textContent =
      result.description;

    document.getElementById("keywordsOutput").textContent =
      result.keywords;

    status.hidden = true;
    output.hidden = false;
  } catch (error) {
    console.error(error);

    status.hidden = false;
    status.innerHTML = `
      <div class="magic-star">!</div>
      <h3>AI couldn't load</h3>
      <p>Check your internet connection and reload the page.
      The browser needs to download the model on first use.</p>
    `;
  } finally {
    generateBtn.disabled = false;
    generateBtn.innerHTML =
      '<span>✦</span> Generate with AI <span class="button-arrow">↗</span>';
  }
});

document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const element = document.getElementById(button.dataset.copy);

    try {
      await navigator.clipboard.writeText(element.innerText);

      const oldText = button.textContent;
      button.textContent = "✓ Copied";

      setTimeout(() => {
        button.textContent = oldText;
      }, 1200);
    } catch {
      status.hidden = false;
      status.textContent = "Please select and copy the text manually.";
    }
  });
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const content = `SIDEHUSTLE STUDIO — AI LISTING

PRODUCT TITLE
${document.getElementById("titleOutput").innerText}

DESCRIPTION
${document.getElementById("descriptionOutput").innerText}

SEARCH KEYWORDS
${document.getElementById("keywordsOutput").innerText}`;

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "sidehustle-listing.txt";
  link.click();

  URL.revokeObjectURL(url);
});
