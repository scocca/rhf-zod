import {useForm} from "react-hook-form"
import { FormData, UserSchema } from "@/types";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  }=useForm<FormData>({
    resolver: zodResolver(UserSchema)
  });

  const onSubmit = async (data: FormData) =>{
    console.log("SUCCES", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto">
        <h1 className="text-3xl font-bold mb-4">
          Zod & react-hook-form
        </h1>

        <FormField
        type='email'
        placeholder="Email"
        name='email'
        register={register}
        error={errors.email}
        />

        <FormField
        type="text"
        placeholder="Github URL"
        name="githubUrl"
        register={register}
        error={errors.githubUrl}
        />

        <FormField
        type="number"
        placeholder="Years of Experience (1-10)"
        name="yearsOfExperience"
        register={register}
        error={errors.yearsOfExperience}
        valueAsNumber
        />

        <FormField
        type="password"
        placeholder="Password"
        name="password"
        register={register}
        error={errors.password}
        />

        <FormField
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
        
      </div>
    </form>
  )
}

export default Form;
