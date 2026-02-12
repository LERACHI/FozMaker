import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>

        <p className="mb-2 text-xl text-muted-foreground">
          Página não encontrada
        </p>

        <p className="mb-6 text-sm text-muted-foreground">
          Caminho acessado: {location.pathname}
        </p>

        <a
          href="#/"
          className="inline-block rounded-lg bg-primary px-6 py-2 text-white transition hover:opacity-90"
        >
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

