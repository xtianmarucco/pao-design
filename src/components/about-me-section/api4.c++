
// API 4 LOGIC DE PROGRAMACION - GRUPO 1 - MARUCCO GONZALEZ CHRISTIAN //

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Función para mostrar los números ordenados ingresados por el usuario
void mostrarNumerosOrdenados(const vector<int>& intentos) {
    // Crear una copia del vector intentos para ordenar
    vector<int> numerosOrdenados = intentos;
    sort(numerosOrdenados.begin(), numerosOrdenados.end());
    cout << "Numeros ingresados ordenados: ";
    for (int num : numerosOrdenados) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    // Inicializar la semilla del generador de números aleatorios
    srand(time(nullptr));

    // Definir variables para el rango de números y la cantidad de intentos
    int rangoInferior, rangoSuperior, intentosMaximos;
    cout << "Ingrese el rango de numeros para el juego (rango inferior y rango superior): ";
    cin >> rangoInferior >> rangoSuperior;
    cout << "Ingrese la cantidad de intentos maximos: ";
    cin >> intentosMaximos;

    // Generar un número aleatorio dentro del rango
    int numeroAleatorio = rand() % (rangoSuperior - rangoInferior + 1) + rangoInferior;

    // Vector para almacenar los números ingresados por el usuario
    vector<int> intentos;

    // Bucle para permitir al usuario ingresar varios números
    int intentosRestantes = intentosMaximos;
    while (intentosRestantes > 0) {
        // Mostrar cuántos intentos lleva y cuántos intentos le quedan
        cout << "Intentos restantes: " << intentosRestantes << endl;

        // Mostrar los números ingresados hasta el momento ordenados
        mostrarNumerosOrdenados(intentos);

        // Solicitar al usuario que ingrese un número
        int numeroIngresado;
        cout << "Ingrese un numero para intentar adivinar: ";
        cin >> numeroIngresado;

        // Verificar si el número ingresado ya fue ingresado anteriormente
        if (find(intentos.begin(), intentos.end(), numeroIngresado) != intentos.end()) {
            cout << "Este numero ya fue ingresado anteriormente. Por favor, ingrese otro numero." << endl;
            continue; // Volver al inicio del bucle
        }

        // Verificar si el número ingresado está dentro del rango establecido
        if (numeroIngresado < rangoInferior || numeroIngresado > rangoSuperior) {
            cout << "El numero ingresado esta fuera del rango establecido. Por favor, ingrese otro numero." << endl;
            continue; // Volver al inicio del bucle
        }

        // Guardar el número ingresado en el vector de intentos
        intentos.push_back(numeroIngresado);

        // Mostrar si el número ingresado es mayor o menor que el número generado
        if (numeroIngresado == numeroAleatorio) {
            cout << "¡Felicidades! Ha adivinado el número correctamente." << endl;
            break; // Salir del bucle si el usuario adivina el número
        } else if (numeroIngresado < numeroAleatorio) {
            cout << "El numero ingresado es menor que el numero generado." << endl;
        } else {
            cout << "El numero ingresado es mayor que el numero generado." << endl;
        }

        // Decrementar el contador de intentos restantes
        intentosRestantes--;
    }

    // Si el usuario se queda sin intentos, mostrar el número generado
    if (intentosRestantes == 0) {
        cout << "Se ha quedado sin intentos. El numero generado era: " << numeroAleatorio << endl;
    }

    return 0;
}
