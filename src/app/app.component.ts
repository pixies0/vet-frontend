import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true, // ✅ Isso indica que ele é um componente standalone
  selector: 'app-root',
  imports: [FormsModule,HttpClientModule], // ✅ Precisamos importar os módulos aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  login() {
    const userData = { email: this.email, password: this.password };

    this.http.post('https://suaapi.com/auth/login', userData).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido!', response);
        localStorage.setItem('token', JSON.stringify(response));
      },
      error: (err) => {
        console.error('Erro no login', err);
        this.errorMessage = 'Credenciais inválidas';
      }
    });
  }
}
