const getData = (data, successRate = 0.98, maxLatencyMs = 1000) => {
    return new Promise((resolve, reject) => {
      // Générez un chiffre aléatoire entre 0 et 1 pour déterminer le succès
      const randomSuccess = Math.random() <= successRate;
  
      // Générez une latence aléatoire
      const randomLatency = Math.random() * maxLatencyMs;
  
      // Utilisez setTimeout pour simuler la latence
      setTimeout(() => {
        if (randomSuccess) {
          // Si le succès est vrai, résolvez la promesse avec les données
          resolve(data);
        } else {
          // Sinon, renvoyez un message d'erreur
          reject("Échec de la récupération des données.");
        }
      }, randomLatency);
    });
  };
  
  // Exemple d'utilisation
  getData("Données importantes")
    .then((result) => {
      console.log("Données récupérées avec succès:", result);
    })
    .catch((error) => {
      console.error("Erreur:", error);
    });
  