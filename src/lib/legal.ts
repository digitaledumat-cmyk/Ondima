export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPage {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalPages: Record<string, LegalPage> = {
  "mentions-legales": {
    title: "Mentions légales",
    description: "Informations légales relatives au site Ondima.ma",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Éditeur du site",
        paragraphs: [
          "Le site ondima.ma est édité par Ondima, service de distribution d'accès IPTV premium destiné aux utilisateurs au Maroc et à l'international.",
          "Contact : contact@ondima.ma — WhatsApp : +212 600-184186.",
          "Directeur de la publication : Service Client Ondima.",
        ],
      },
      {
        title: "Hébergement",
        paragraphs: [
          "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
          "Infrastructure cloud distribuée avec certificats SSL/TLS et mise à disposition continue du service web.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "L'ensemble des éléments graphiques, textuels et structurels du site Ondima.ma sont protégés par le droit de la propriété intellectuelle.",
          "Toute reproduction, représentation ou exploitation non autorisée est strictement interdite.",
        ],
      },
      {
        title: "Responsabilité",
        paragraphs: [
          "Ondima s'efforce d'assurer l'exactitude des informations publiées. Toutefois, le site peut contenir des inexactitudes ou omissions ; l'éditeur ne saurait être tenu responsable des dommages résultant de leur utilisation.",
          "L'utilisateur est seul responsable de la conformité de son usage du service avec la législation de son pays de résidence.",
        ],
      },
    ],
  },
  "conditions-utilisation": {
    title: "Conditions d'utilisation",
    description: "Conditions générales d'utilisation du service Ondima.ma",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Objet",
        paragraphs: [
          "Les présentes conditions régissent l'accès et l'utilisation du site ondima.ma et des services IPTV associés commercialisés sous la marque Ondima.",
          "En accédant au site, l'utilisateur accepte sans réserve les présentes conditions.",
        ],
      },
      {
        title: "Services proposés",
        paragraphs: [
          "Ondima commercialise des abonnements annuels donnant accès à des flux télévisuels et contenus VOD via des applications compatibles IPTV/OTT.",
          "L'activation, le support et la facturation s'effectuent principalement via WhatsApp. Aucun paiement en ligne automatisé n'est proposé sur le site.",
        ],
      },
      {
        title: "Obligations de l'utilisateur",
        paragraphs: [
          "L'utilisateur s'engage à fournir des informations exactes lors de sa demande d'essai ou d'abonnement.",
          "Il s'engage à ne pas partager ses identifiants au-delà du nombre d'appareils autorisés par son forfait.",
          "Toute utilisation abusive, revente non autorisée ou tentative de contournement technique pourra entraîner la suspension immédiate du compte.",
        ],
      },
      {
        title: "Durée et résiliation",
        paragraphs: [
          "Les abonnements sont souscrits pour une durée de 12 mois à compter de l'activation.",
          "Ondima se réserve le droit de suspendre ou résilier un accès en cas de violation des présentes conditions, après notification lorsque cela est possible.",
        ],
      },
    ],
  },
  "politique-utilisation-acceptable": {
    title: "Politique d'utilisation acceptable",
    description: "Règles d'usage acceptable du service IPTV Ondima",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Usage autorisé",
        paragraphs: [
          "Le service Ondima est destiné à un usage personnel et familial dans le cadre de l'abonnement souscrit.",
          "L'utilisateur peut visionner les contenus sur le nombre d'appareils simultanés prévu par son forfait (1, 2 ou 3 selon le pack).",
        ],
      },
      {
        title: "Usages interdits",
        paragraphs: [
          "Revente, redistribution ou partage public des identifiants et flux.",
          "Utilisation commerciale non autorisée (bars, hôtels, salles publiques).",
          "Tentatives de rétro-ingénierie, attaque des serveurs ou surcharge intentionnelle de l'infrastructure.",
          "Contournement des limitations techniques (nombre d'écrans, géo-restrictions contractuelles).",
        ],
      },
      {
        title: "Sanctions",
        paragraphs: [
          "En cas de violation, Ondima peut suspendre temporairement ou définitivement l'accès sans remboursement, selon la gravité de l'infraction.",
          "Des mesures techniques de protection (anti-abus, limitation de connexions) sont en place pour préserver la qualité du service pour l'ensemble des abonnés.",
        ],
      },
    ],
  },
  "conformite-rgpd": {
    title: "Conformité RGPD",
    description: "Politique de conformité au Règlement Général sur la Protection des Données",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Responsable du traitement",
        paragraphs: [
          "Ondima agit en qualité de responsable du traitement pour les données collectées via ondima.ma et les échanges WhatsApp liés aux demandes d'essai et d'abonnement.",
        ],
      },
      {
        title: "Données collectées",
        paragraphs: [
          "Identité (nom, prénom), coordonnées (téléphone, e-mail), préférences de forfait, historique de support et données techniques de connexion (logs serveur, adresse IP) dans une finalité de sécurité et de qualité de service.",
        ],
      },
      {
        title: "Base légale et finalités",
        paragraphs: [
          "Exécution du contrat (gestion de l'abonnement), intérêt légitime (amélioration du service, lutte anti-fraude) et consentement (communications marketing lorsque applicable).",
        ],
      },
      {
        title: "Droits des personnes",
        paragraphs: [
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité.",
          "Pour exercer vos droits : contact@ondima.ma. Réponse sous 30 jours maximum.",
          "Réclamation possible auprès de l'autorité de protection des données compétente (CNDP au Maroc, CNIL en France).",
        ],
      },
    ],
  },
  "politique-dmca": {
    title: "Politique DMCA",
    description: "Procédure de notification et retrait de contenu",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Engagement Ondima",
        paragraphs: [
          "Ondima respecte les droits de propriété intellectuelle et répond aux notifications valides de retrait conformes aux standards internationaux (DMCA et équivalents).",
        ],
      },
      {
        title: "Procédure de notification",
        paragraphs: [
          "Les titulaires de droits peuvent adresser une notification écrite à contact@ondima.ma incluant : identification de l'œuvre protégée, description du contenu litigieux, coordonnées du déclarant et déclaration de bonne foi.",
          "Ondima analysera la demande et prendra les mesures appropriées dans les meilleurs délais.",
        ],
      },
      {
        title: "Contre-notification",
        paragraphs: [
          "Tout utilisateur dont le contenu a été restreint peut soumettre une contre-notification motivée. Ondima examinera le dossier conformément à la réglementation applicable.",
        ],
      },
    ],
  },
  "politique-confidentialite": {
    title: "Politique de confidentialité",
    description: "Protection et traitement de vos données personnelles",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Collecte des informations",
        paragraphs: [
          "Nous collectons les informations que vous nous transmettez volontairement via le formulaire d'essai, WhatsApp, e-mail ou lors de la souscription à un abonnement.",
          "Des cookies techniques et analytiques peuvent être utilisés pour mesurer l'audience et améliorer l'expérience utilisateur.",
        ],
      },
      {
        title: "Conservation",
        paragraphs: [
          "Les données clients actifs sont conservées pendant la durée de la relation contractuelle plus 3 ans à des fins de preuve et de support.",
          "Les données de prospects (essais) sont conservées 12 mois maximum sauf opposition.",
        ],
      },
      {
        title: "Sécurité",
        paragraphs: [
          "Ondima met en œuvre des mesures techniques et organisationnelles : chiffrement SSL, accès restreint aux données, sauvegardes régulières et monitoring des serveurs.",
        ],
      },
      {
        title: "Transferts internationaux",
        paragraphs: [
          "Certaines données peuvent transiter par des prestataires situés hors UE/EEE. Des garanties appropriées (clauses contractuelles types) sont mises en place le cas échéant.",
        ],
      },
    ],
  },
  "remboursement-et-retour": {
    title: "Remboursement et retour",
    description: "Politique de garantie satisfait et remboursement Ondima",
    lastUpdated: "4 juin 2026",
    sections: [
      {
        title: "Garantie 45 jours",
        paragraphs: [
          "Ondima offre une garantie « Satisfait ou Remboursé » de 45 jours sur tous les forfaits annuels, à compter de la date d'activation.",
          "Si le service ne répond pas aux engagements de qualité annoncés, vous pouvez demander un remboursement intégral dans ce délai.",
        ],
      },
      {
        title: "Conditions d'éligibilité",
        paragraphs: [
          "La demande doit être formulée via WhatsApp ou contact@ondima.ma avec votre identifiant client.",
          "Le remboursement ne s'applique pas en cas d'usage abusif, de partage non autorisé d'identifiants ou de violation des conditions d'utilisation.",
        ],
      },
      {
        title: "Procédure et délais",
        paragraphs: [
          "Après validation par notre équipe support, le remboursement est traité sous 7 à 14 jours ouvrés via le mode de paiement initial.",
          "L'accès au service est désactivé dès confirmation du remboursement.",
        ],
      },
      {
        title: "Essai 24h gratuit",
        paragraphs: [
          "L'essai gratuit de 24 heures ne donne lieu à aucun paiement ni remboursement. Il permet d'évaluer la qualité du service avant engagement.",
        ],
      },
    ],
  },
};
