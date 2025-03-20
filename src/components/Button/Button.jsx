import './Button.css'

export const Button = ({text}) => {
  return (
    <div className="container-fluid">
      <button type="submit" class="btn btn-primary btn-lg fs-5 my-4">{text}</button>
    </div>
  ) 
}
