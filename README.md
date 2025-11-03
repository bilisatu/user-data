# USER DATA — Profile Generator

A small front-end project that lets users enter their name, age, favorite color and a short bio, then generates a simple profile card.

## Files
- `index.html` — main HTML page with form and output area.
- `style.css` — styling for the form and profile card.
- `script.js` — JavaScript that reads the form, validates input, and generates the profile card.

## How to run
1. Open `index.html` in your browser (double-click the file or use "Open with Live Server" in VS Code).
2. Fill the form fields and click "GENERATE PROFILE".

No build tools or dependencies are required — it's plain HTML/CSS/JS.

## What I changed / Notes
- Fixed a runtime bug that prevented profile generation: there was a typo calling `name.tuUpperCase()` instead of `name.toUpperCase()`. That threw an error and stopped the script.
- Removed the "VARIABLE IN ACTION" tracker UI and its associated JS/CSS to simplify the page and remove a potential source of runtime errors.

If you prefer the tracker restored instead of removed, see "Revert or hide the tracker" below.

## Revert or hide the tracker
- Revert (restore original behavior): undo the changes to `index.html`, `script.js`, and `style.css` (recover the removed `variable-tracker` block and the event listeners for `#trackName`, `#trackAge`, `#trackColor`, `#trackBio`). If you use version control (git) run `git checkout -- <file>` on the modified files.

- Non-destructive hide: instead of removing the tracker, wrap it in a container and toggle with CSS or a small boolean in `script.js`. Example (quick idea):
  - Add `id="variableTracker"` to the tracker `div`.
  - In CSS: `.hidden { display: none !important; }`
  - To hide by default, add the `hidden` class in the HTML. To toggle, add/remove the class via a button in `script.js`.

## Known issues
- The form validates that name and age are present. Age is not range-checked (e.g., negative numbers or very large values). Add extra validation if you need stricter rules.

## License
MIT — feel free to use and adapt.
