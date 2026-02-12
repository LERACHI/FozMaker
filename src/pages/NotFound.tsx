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
          Caminho: {location.pathname}
        </p>

        <a href="#/" className="text-primary underline">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

