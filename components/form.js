import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      reset();
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="commenting-form">
      <input {...register("_id")} type="hidden" name="_id" value={_id} />
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            id="username"
            placeholder="Nom"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            id="useremail"
            placeholder="Email (ne sera pas publiée)"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-12">
          <textarea
            name="comment"
            {...register("comment", { required: true })}
            id="comment"
            placeholder="Votre commentaire"
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group col-md-12">
          <button type="submit" className="btn btn-secondary">
            Envoyer le commentaire
          </button>
        </div>
      </div>
    </form>
  );
}
