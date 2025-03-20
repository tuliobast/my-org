import './Button.css'

export const Button = ({text}) => {
  return (
    <div className="container-fluid">
      <button type="submit" class="container-fluid btn btn-primary btn-lg fs-3 my-5 w-25">{text}</button>
    </div>
  ) 
}
