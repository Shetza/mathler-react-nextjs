export default function RulesPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Rules</h1>
      <p>
        Le but du jeu est de deviner l'équation du jour.  
        Utilise les touches pour construire ton équation et appuie sur OK pour valider.
      </p>
      <p className="mt-2">
        Chaque caractère est évalué comme : correct, présent mais mal placé, ou absent.
      </p>
    </div>
  );
}
