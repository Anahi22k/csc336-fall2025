
import { useState } from "react";
import FormFieldError from "../components/FormFieldError.jsx";
import { createItem } from "../api.js";

const CATEGORY_OPTIONS = ["top", "bottom", "dress", "outerwear", "shoes"];

export default function AddItem() {
  const [values, setValues] = useState({
    name: "",
    category: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(""); // 

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
    setServerError("");
  }

  function validate() {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Please give this item a name.";
    if (!values.category) newErrors.category = "Pick a category.";
    if (!values.imageUrl.trim())
      newErrors.imageUrl = "Add an image URL.";
    else if (!values.imageUrl.startsWith("http"))
      newErrors.imageUrl = "Image URL should start with http or https.";
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    setServerError("");
    setSubmitted(false);
  
    if (Object.keys(validation).length > 0) return;
  
    try {
      await createItem(values);
      setSubmitted(true);
      setValues({
        name: "",
        category: "",
        imageUrl: "",
      });
    } catch (err) {
      setServerError(err.message || "Culd not save the item.");
    }
  }
  

  return (
    <section className="page page-form">
      <h2 className="page-title">Add a Clothing Item</h2>
      <p className="page-subtitle">
        Here you can add different clothing items to later try on in your wardrobe.
        You can do so by first googling an image of the clothing item you want to add, and right clicking to copy the image address. Example: https://cdn11.bigcommerce.com/s-sqq00r7/images/stencil/500x659/products/11853/4143/7682_source_1489853294__16055.1760460857.jpg?c=2
      </p>

      <form className="card form-card" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span className="field-label">Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={errors.name ? "input error" : "input"}
            placeholder="Pink cropped sweater"
          />
          <FormFieldError message={errors.name} />
        </label>

        <label className="field">
          <span className="field-label">Category</span>
          <select
            name="category"
            value={values.category}
            onChange={handleChange}
            className={errors.category ? "input error" : "input"}
          >
          <option value="">Select one…</option>
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </option>
          ))}
          </select>
          <FormFieldError message={errors.category} />
        </label>

        <label className="field">
          <span className="field-label">Image URL</span>
          <input
            type="text"
            name="imageUrl"
            value={values.imageUrl}
            onChange={handleChange}
            className={errors.imageUrl ? "input error" : "input"}
            placeholder="Paste an image URL here"
          />
          <FormFieldError message={errors.imageUrl} />
        </label>

        {serverError && <p className="field-error">{serverError}</p>}

        <button type="submit" className="btn-primary">
          Save Item
        </button>

        {submitted && Object.keys(errors).length === 0 && !serverError && (
          <p className="form-success">
            Saved to your wardrobe 
          </p>
        )}
      </form>
    </section>
  );
}
