public class Veiculo
{
    private string placa;
    private int ano;

    public Veiculo(string placa, int ano)
    {
        placa = this.placa;
        ano = this.ano;
    }

    public void setPlaca(string placa)
    {
        placa = this.placa;
    }

    public void setAno(string ano)
    {
        ano = this.ano;
    }

    public string getPlaca()
    {
        return placa;
    }

    public int getAno()
    {
        return ano;
    }

    public void exibirDados()
    {
        Console.WriteLine("Placa: ", placa, " Ano: ", ano);
    }
}

public class Caminhao: Veiculo
{
    private int eixos;

    public void Caminhao(string placa, int ano, int eixos)
    {
        placa = this.placa;
        ano = this.ano;
        eixos = this.eixos;
    }

    public void setEixos(int eixos)
    {
        eixos = this.eixos;
    }

    public int getEixos()
    {
        return eixos;
    }

    public override exibirDados()
    {
        Console.WriteLine("Placa: ", placa, "\nAno: ", ano, "\nEixos: ", eixos);
    }
}

public class Onibus: Veiculo
{
    private int assentos;

    public void Caminhao(string placa, int ano, int assentos)
    {
        placa = this.placa;
        ano = this.ano;
        assentos = this.assentos;
    }

    public void setAssentos(int assentos)
    {
        assentos = this.assentos;
    }

    public int getAssentos()
    {
        return assentos;
    }

    public override exibirDados()
    {
        Console.WriteLine("Placa: ", placa, "\nAno: ", ano, "\nAssentos: ", assentos);
    }
}