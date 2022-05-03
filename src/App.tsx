
interface IProps{
  text?: string
}

const Button  = (props: IProps) => {
  return <button>{ props.text ?? 'Default' }</button>
}


function App() {

  return (
    <div>
      <Button text="Enviar"/>
      <Button text="Salvar"/>
      <Button />
    </div>
  )
}

export default App
