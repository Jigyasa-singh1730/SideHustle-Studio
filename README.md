SideHustle Studio — AI Listing Writer
Create product listings with AI-assisted titles, descriptions, and keywords. SideHustle Studio is a browser-based project designed to help online sellers turn basic product details into clearer, more useful listing copy.
 Features
- AI-assisted listing generation — generate a product title, description, and keywords.
- Seller-focused inputs — enter product details, choose a selling platform, and select a writing tone.
- Copy and download — copy generated content or download it for later use.
- Runs in the browser — the project is built with HTML, CSS, and JavaScript.
- No Ollama required — the project does not require installing or running Ollama.
- No separate paid AI API key — the configured model runs in the browser using Transformers.js.
   Tech Stack
- HTML5
- CSS3
- JavaScript
- Transformers.js
- Xenova/flan-t5-small
   Project Structure
SideHustle-Studio/
├── index.html
├── style.css
├── script.js
└── README.md
   Run Locally
1. Download or clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd SideHustle-Studio
Replace <YOUR_GITHUB_REPOSITORY_URL> with your repository's actual URL. If you downloaded the project as a ZIP, extract it and open the extracted folder.
2. Open the project
The easiest option in VS Code is to open the folder and run index.html using the Live Server extension.
You can also open index.html directly in a browser, but using a local development server is recommended for more reliable module and model loading.
3. Wait for the model to load
The first run requires an internet connection to fetch the Transformers.js library and the model files. Initial loading may take a while, depending on your connection and device. Later runs may be faster if the browser has cached the files.
4. Generate a listing
1. Enter a product name.
2. Add useful product details.
3. Choose a platform and tone.
4. Click the generate button.
5. Review the generated title, description, and keywords.
6. Copy the content or download the listing.
 How It Works
1. The user provides product information and preferences.
2. The front end prepares a prompt for the configured text-generation model.
3. Transformers.js loads and runs the model in the browser.
4. The generated text is displayed in the interface.
5. The user can copy or download the result.
Note: Generated text may be incomplete, inaccurate, or repetitive. Always review and edit listing copy before publishing it.
 Internet and Privacy
- An internet connection is needed initially to download the JavaScript library and model files.
- Once the required files are cached, some usage may work without a connection, depending on the browser cache and setup.
- Model inference is designed to run in the browser; this project does not require a separate paid AI API key or Ollama server.
- Avoid entering personal, confidential, or sensitive information.
- Check the dependencies and hosting setup before making privacy guarantees for a deployed version.
   Limitations
- Performance depends on the user's device, available memory, browser, and model download speed.
- The model may produce generic or incorrect product claims.
- Generated keywords and descriptions are suggestions, not a guarantee of better search ranking or sales.
- Platform-specific requirements can change. Verify the current rules of your chosen marketplace before publishing.
- The project requires compatible browser features and successful loading of its dependencies and model.
   Troubleshooting
The Generate button does not work
- Open the browser developer console and check for JavaScript errors.
- Confirm that index.html, style.css, and script.js are in the expected locations.
- Check that the internet connection is working during the initial model download.
The model takes a long time to load
- Wait for the first download to finish.
- Try a stable internet connection and a modern browser.
- Refresh the page after checking for errors in the developer console.
The page looks unstyled
- Confirm that the stylesheet filename and path in index.html match style.css.
The output is empty or incomplete
- Check that the model loaded successfully.
- Try shorter, clearer product details.
- Review the browser console for errors.
 Future Improvements
- Add more product categories and listing templates.
- Improve loading and error messages.
- Add editable output fields and a listing history.
- Add export options for different formats.
- Add tests for input validation and output handling.
- Evaluate other open-weight models for quality and performance.
   Contributing
Contributions, bug reports, and suggestions are welcome.
1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Open a pull request describing the change.
 License
Add a license file before distributing the project as open source. Choose a license that fits your goals and ensure you have the right to redistribute all dependencies and assets.
Built for the SideHustle / open-source AI challenge.
SideHustle Studio helps sellers draft product listings faster; users remain responsible for reviewing the final content.
