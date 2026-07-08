import type { Dish, MenuCategory } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// PERSONALIZE ME
// Each dish references an image in /public/images/restaurant/menu named after the dish.
// Keep that 1:1 mapping (paneer-butter-masala -> paneer-butter-masala.svg/.webp)
// so swapping in real photography is a drop-in replacement.
// ─────────────────────────────────────────────────────────────────────────────

export const menuCategories: MenuCategory[] = [
  {
    id: 'small-plates',
    name: 'Small Plates',
    description: 'Bright, shareable openers made for the middle of the table.',
  },
  {
    id: 'mains',
    name: 'Signature Mains',
    description: 'Slow-cooked curries and tandoor classics, reimagined.',
  },
  {
    id: 'breads-rice',
    name: 'Breads & Rice',
    description: 'Stone-ground flours and aged basmati, fresh from the tandoor.',
  },
  {
    id: 'desserts',
    name: 'Sweet Endings',
    description: 'House desserts with a contemporary twist.',
  },
];

export const dishes: Dish[] = [
  // ── Small Plates ──────────────────────────────────────────────────────────
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    description:
      'Crisp fermented rice crêpe folded over spiced potato, served with coconut chutney and sambar.',
    price: '₹395',
    image: '/images/restaurant/menu/masala-dosa.svg',
    imageAlt: 'Golden, crisp masala dosa with coconut chutney and sambar',
    category: 'small-plates',
    isVegetarian: true,
    spiceLevel: 1,
    isSignature: true,
  },
  {
    id: 'idli-sambar',
    name: 'Idli Sambar',
    description:
      'Pillowy steamed rice cakes with lentil sambar and a trio of chutneys.',
    price: '₹325',
    image: '/images/restaurant/menu/idli.svg',
    imageAlt: 'Soft white idli rice cakes served with sambar and chutney',
    category: 'small-plates',
    isVegetarian: true,
    spiceLevel: 1,
  },
  {
    id: 'chicken-tikka',
    name: 'Charred Chicken Tikka',
    description:
      'Yoghurt-and-saffron marinated chicken, blistered in the tandoor, finished with mint.',
    price: '₹445',
    image: '/images/restaurant/menu/chicken-tikka.svg',
    imageAlt: 'Char-grilled chicken tikka skewers with mint chutney',
    category: 'small-plates',
    isVegetarian: false,
    spiceLevel: 2,
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    description:
      'Crushed samosa, chickpeas, tamarind, mint, and a flurry of pomegranate.',
    price: '₹345',
    image: '/images/restaurant/menu/samosa-chaat.svg',
    imageAlt: 'Samosa chaat topped with tamarind, yoghurt and pomegranate',
    category: 'small-plates',
    isVegetarian: true,
    spiceLevel: 2,
  },

  // ── Signature Mains ───────────────────────────────────────────────────────
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    description:
      'House-made paneer in a velvety tomato-cashew gravy, kissed with fenugreek and cream.',
    price: '₹545',
    image: '/images/restaurant/menu/paneer-butter-masala.svg',
    imageAlt: 'Creamy paneer butter masala garnished with cream and coriander',
    category: 'mains',
    isVegetarian: true,
    spiceLevel: 1,
    isSignature: true,
  },
  {
    id: 'butter-chicken',
    name: 'Saffron Butter Chicken',
    description:
      'Tandoor chicken simmered in a silky makhani sauce perfumed with saffron.',
    price: '₹625',
    image: '/images/restaurant/menu/butter-chicken.svg',
    imageAlt: 'Rich saffron butter chicken in a copper bowl',
    category: 'mains',
    isVegetarian: false,
    spiceLevel: 2,
    isSignature: true,
  },
  {
    id: 'lamb-rogan-josh',
    name: 'Lamb Rogan Josh',
    description:
      'Kashmiri chillies and aromatic spices slow-braised with tender lamb shoulder.',
    price: '₹795',
    image: '/images/restaurant/menu/lamb-rogan-josh.svg',
    imageAlt: 'Deep red lamb rogan josh with tender braised lamb',
    category: 'mains',
    isVegetarian: false,
    spiceLevel: 3,
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    description:
      'Black lentils simmered overnight with tomato, butter, and a whisper of smoke.',
    price: '₹475',
    image: '/images/restaurant/menu/dal-makhani.svg',
    imageAlt: 'Slow-cooked creamy black dal makhani',
    category: 'mains',
    isVegetarian: true,
    spiceLevel: 1,
  },

  // ── Breads & Rice ─────────────────────────────────────────────────────────
  {
    id: 'garlic-naan',
    name: 'Garlic Butter Naan',
    description: 'Tandoor-blistered naan brushed with garlic butter and herbs.',
    price: '₹195',
    image: '/images/restaurant/menu/garlic-naan.svg',
    imageAlt: 'Fresh garlic naan with melted butter and herbs',
    category: 'breads-rice',
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: 'saffron-biryani',
    name: 'Saffron Vegetable Biryani',
    description:
      'Aged basmati layered with seasonal vegetables, saffron, and fried onion.',
    price: '₹495',
    image: '/images/restaurant/menu/saffron-biryani.svg',
    imageAlt: 'Fragrant saffron biryani with vegetables and fried onion',
    category: 'breads-rice',
    isVegetarian: true,
    spiceLevel: 2,
    isSignature: true,
  },

  // ── Sweet Endings ─────────────────────────────────────────────────────────
  {
    id: 'gulab-jamun',
    name: 'Warm Gulab Jamun',
    description:
      'Golden milk dumplings soaked in cardamom-rose syrup, with pistachio.',
    price: '₹265',
    image: '/images/restaurant/menu/gulab-jamun.svg',
    imageAlt: 'Warm gulab jamun in rose syrup topped with pistachio',
    category: 'desserts',
    isVegetarian: true,
    spiceLevel: 0,
  },
  {
    id: 'pistachio-kulfi',
    name: 'Pistachio Kulfi',
    description: 'Slow-churned cardamom kulfi with toasted pistachio crumble.',
    price: '₹245',
    image: '/images/restaurant/menu/pistachio-kulfi.svg',
    imageAlt: 'Sliced pistachio kulfi with toasted nuts',
    category: 'desserts',
    isVegetarian: true,
    spiceLevel: 0,
  },
];
