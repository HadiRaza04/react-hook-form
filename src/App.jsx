import { useForm } from 'react-hook-form'
import './App.css'
import { DevTool } from '@hookform/devtools'


let renderCount = 0;
function App() {

  const form = useForm()
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState

  const onSubmit = (data) => {
    console.log("Data", data)
  }
  renderCount++;
  return (
    <div className='border-2 border-black p-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-4xl'>Form ({renderCount / 2})</h1>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text'  className='p-2 m-2 outline-none rounded-md' {...register("name", {
          required: {
            value: true,
            message: "Name is required"
          }
        })} />
        <p className='text-red-500 text-md text-left'>{errors.name?.message}</p>
        <br />
        <label htmlFor='email'>Email</label>
        <input type="email" id='email' className='p-2 m-2 outline-none rounded-md' {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format"
          },
          required: {
            value: true,
            message: "Email is required"
          }
        })} />
        <p className='text-red-500 text-md text-left'>{errors.email?.message}</p>

        <br />
        <label htmlFor='field'>Field</label>
        <input type="text" id='field'  className='p-2 m-2 outline-none rounded-md' {...register("field")} />
        <p className='text-red-500 text-md text-left'>{errors.field?.message}</p>
        <br />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default App
