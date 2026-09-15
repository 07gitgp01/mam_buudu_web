import {
  Personne,
  getPhotoUrl,
  getInitiales,
  getNomComplet,
  extractAnnee,
  estVivant,
  getAgeLabel,
} from './personne.model';

function makePersonne(overrides: Partial<Personne> = {}): Personne {
  return {
    id: '1',
    familleId: 'f1',
    prenoms: 'Awa',
    nomNaissance: 'Diarra',
    nomUsage: null,
    sexe: 'F',
    dateNaissance: '1990-05-12',
    lieuNaissance: 'Bamako',
    dateDeces: null,
    lieuDeces: null,
    biographie: null,
    notes: null,
    photoUrl: null,
    visibilite: 'famille',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    ...overrides,
  };
}

describe('personne.model helpers', () => {
  describe('getPhotoUrl', () => {
    it('retourne null si pas de photo', () => {
      expect(getPhotoUrl(makePersonne({ photoUrl: null }))).toBeNull();
    });

    it('retourne null pour une ancienne URL Render éphémère', () => {
      const url = 'https://mam-buudu-api.onrender.com/uploads/photo123.jpg';
      expect(getPhotoUrl(makePersonne({ photoUrl: url }))).toBeNull();
    });

    it('retourne l\'URL telle quelle sinon', () => {
      const url = 'https://res.cloudinary.com/demo/photo.jpg';
      expect(getPhotoUrl(makePersonne({ photoUrl: url }))).toBe(url);
    });
  });

  describe('getInitiales', () => {
    it('combine la première lettre du prénom et du nom d\'usage', () => {
      expect(getInitiales(makePersonne({ prenoms: 'Awa', nomUsage: 'Traoré', nomNaissance: 'Diarra' }))).toBe('AT');
    });

    it('utilise le nom de naissance si pas de nom d\'usage', () => {
      expect(getInitiales(makePersonne({ prenoms: 'Awa', nomUsage: null, nomNaissance: 'Diarra' }))).toBe('AD');
    });

    it('retourne "MB" si aucune donnée disponible', () => {
      expect(getInitiales(makePersonne({ prenoms: null, nomUsage: null, nomNaissance: null }))).toBe('MB');
    });
  });

  describe('getNomComplet', () => {
    it('assemble prénom et nom d\'usage', () => {
      expect(getNomComplet(makePersonne({ prenoms: 'Awa', nomUsage: 'Traoré' }))).toBe('Awa Traoré');
    });

    it('retombe sur le nom de naissance si pas de nom d\'usage', () => {
      expect(getNomComplet(makePersonne({ prenoms: 'Awa', nomUsage: null, nomNaissance: 'Diarra' }))).toBe('Awa Diarra');
    });

    it('retourne un tiret si tout est vide', () => {
      expect(getNomComplet(makePersonne({ prenoms: null, nomUsage: null, nomNaissance: null }))).toBe('—');
    });
  });

  describe('extractAnnee', () => {
    it('extrait l\'année depuis un format YYYY-MM-DD', () => {
      expect(extractAnnee('1990-05-12')).toBe(1990);
    });

    it('extrait l\'année depuis un format YYYY seul', () => {
      expect(extractAnnee('1990')).toBe(1990);
    });

    it('retourne null si la date est null', () => {
      expect(extractAnnee(null)).toBeNull();
    });

    it('retourne null si le format est invalide', () => {
      expect(extractAnnee('abcd')).toBeNull();
    });
  });

  describe('estVivant', () => {
    it('retourne true si pas de date de décès', () => {
      expect(estVivant(makePersonne({ dateDeces: null }))).toBe(true);
    });

    it('retourne false si une date de décès est renseignée', () => {
      expect(estVivant(makePersonne({ dateDeces: '2020-01-01' }))).toBe(false);
    });
  });

  describe('getAgeLabel', () => {
    it('retourne une plage année naissance – décès si décédé', () => {
      expect(getAgeLabel(makePersonne({ dateNaissance: '1950', dateDeces: '2019' }))).toBe('1950 – 2019');
    });

    it('retourne un âge calculé si vivant', () => {
      const anneeNaissance = new Date().getFullYear() - 30;
      const label = getAgeLabel(makePersonne({ dateNaissance: String(anneeNaissance), dateDeces: null }));
      expect(label).toBe('30 ans');
    });

    it('retourne une chaîne vide si la date de naissance est invalide/absente', () => {
      expect(getAgeLabel(makePersonne({ dateNaissance: null }))).toBe('');
    });

    it('retourne une chaîne vide si l\'année de naissance est trop ancienne (donnée corrompue)', () => {
      expect(getAgeLabel(makePersonne({ dateNaissance: '1700' }))).toBe('');
    });
  });
});
