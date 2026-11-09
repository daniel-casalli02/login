import Link from "next/link";

export default function TurmasPage() {
  return (
    <main classname="card">
      <h1>Turmas</h1>
      <Link href="/turmas/docente" className="btn">
        Docente
      </Link>
      <Link href="/turmas/instrutor" className="btn">
        Intrutor
      </Link>
    </main>
  );
}