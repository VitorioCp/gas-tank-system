import { Container } from "./style";

export function Menu() {
  return (
    <Container>
      <div className="menu_header">
        <h1>Gás</h1>
        <button>X</button>
      </div>
      <div>
        <button>Adicionar</button>
        <button>Remover</button>
        <button>Anotação</button>

      </div>
    </Container>
  );
}
