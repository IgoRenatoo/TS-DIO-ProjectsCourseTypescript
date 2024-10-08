import styles from "./get-home.module.css";

export function GetHome(){
  return (
    <main>
      <section className={styles.Section}>
        <h1>Bem-vindo ao Dio-Bank</h1>
      </section>

      <section className={styles.Section}>
        <h2>Nossos Serviços</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>Conta Corrente</li>
          <li>Conta Poupança</li>
          <li>Cartões de Crédito</li>
          <li>Empréstimos e Financiamentos</li>
        </ul>
      </section>

      <section className={`${styles.Section} ${styles.SpecialOffers}`}>
        <h2>Ofertas Especiais</h2>
        <p>Confira as promoções especiais disponíveis para novos clientes!</p>
      </section>
    </main>
  )
};