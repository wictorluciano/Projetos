using Calculadora.Services;

CalculadoraImp c = new CalculadoraImp();

int num1 = 5;
int num2 = 15;

Console.WriteLine($"Soma do {num1} + {num2} = {c.Somar(num1, num2)}");


