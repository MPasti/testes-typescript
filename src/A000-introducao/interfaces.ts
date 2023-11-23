interface TemNome {
  nome: string;
}

interface TemSobrenome {
  sobrenome: string;
}

class Aluno implements TemNome, TemSobrenome {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
  ) {}
}

const aluno = new Aluno('Matheus', 'Pasti', 19);
console.log(aluno);
