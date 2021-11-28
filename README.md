# Programação orientada a objetos para web II - 2021/2 - Projeto individual

## Aplicação para auxílio na realização de licitações para uma farmácia escola

O projeto consiste no desenvolvimento de uma aplicação para o cadastro dos preços praticados por fornecedores quanto a matérias-primas e embalagens farmacêuticas.
Coletando-se os preços de vários fornecedores, posteriormente os dados serão utilizados na solicitação dos materiais por via de licitação para uma farmácia-escola, estabelecendo-se um preço médio dos produtos, necessário para tal.

## Angular 13, Bootstrap 5 e NG Bootstrap 12

[Nota de release do NG Bootstrap 12.0.0-beta.4](https://github.com/ng-bootstrap/ng-bootstrap/releases/tag/12.0.0-beta.4)

```
ng-bootstrap 10 (stable) -> Angular 12 and Bootstrap 4
ng-bootstrap 11 (rc -> Angular 13 and Bootstrap 4
ng-bootstrap 12 (beta) -> Angular 13 and Bootstrap 5
```

[ng-bootstrap.github.io](https://ng-bootstrap.github.io)

```
Beta support for Bootstrap 5 is available with 12.0.0-beta.X
You can install it via the npm install @ng-bootstrap/ng-bootstrap@bootstrap5
```
```
// Installation for Angular CLI
ng add @ng-bootstrap/ng-bootstrap
```

Unido:

```
ng add @ng-bootstrap/ng-bootstrap@bootstrap5
```

Modificado ``package.json``:

```
{
  //
    "dependencies": {
      //
      // de "bootstrap": "^4.6.0" p/
      "bootstrap": "^5.1.3",
      //
      },
  //
}
```
