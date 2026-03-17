export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="A propos de moi"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          A propos
        </h2>
      </div>
      <div className="text-muted-foreground">
        <p className="mb-4">
          Je suis un developpeur passionne par la creation d&apos;interfaces
          utilisateur accessibles et pixel-perfect qui allient un design
          reflechi avec une ingenierie robuste. Mon travail se situe a
          l&apos;intersection du design et du developpement, creant des
          experiences qui sont non seulement esthetiques mais aussi
          meticuleusement construites pour la performance et l&apos;utilisabilite.
        </p>
        <p className="mb-4">
          Actuellement, je me concentre sur le developpement d&apos;applications
          web modernes utilisant{" "}
          <span className="font-medium text-foreground">React</span>,{" "}
          <span className="font-medium text-foreground">Next.js</span>, et{" "}
          <span className="font-medium text-foreground">TypeScript</span>. Je
          contribue a la creation et a la maintenance de composants UI qui
          alimentent les produits que je developpe, en veillant a ce qu&apos;ils
          respectent les standards d&apos;accessibilite web.
        </p>
        <p>
          Dans mon temps libre, je m&apos;interesse a l&apos;apprentissage de
          nouvelles technologies, je contribue a des projets open source, et je
          partage mes connaissances avec la communaute. Quand je ne suis pas
          devant mon ordinateur, vous me trouverez en train d&apos;explorer de
          nouveaux endroits ou de lire des livres sur le design et la
          technologie.
        </p>
      </div>
    </section>
  );
}
