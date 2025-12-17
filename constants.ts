import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Daily essentials',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJAuqnc3lvKUzgye3Bfus508MPiYkVAtC7Ma2-vTejU-M5O7MTeSrbh33FxgtEsZOrK6sh9Tv8dUtnXdIoO3O-v4DR2qHmgYsJ0pID_doYE57g0G3_dW_4hdjqX2o34nuXPGDtwTA8bJri6PQS9dYR2V1Zv2HTMElCEGgcEfk-UAFUc65uroXb_i_NnskGX2OaVgDCmxVKpHq6igOVsNIGO0nxzuHJsznOiMKus6vzCcjNnvaTLCTjpFK8Ggyip486p51jhWt0-ENZ',
    color: '#F4F4F4'
  },
  {
    id: '2',
    name: 'Dairy & bakery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoElZc1VW8VBIqIK64m96hX86JPF-7pQSdAd0pOvf0phlp-5ruSkf3d4th8c-IVT8hes6awExFo7FCQr0_Ni0cUoYCnu98cuFNykyfGAINDHS6lWFtucXaED9Uhxx1Tw-XypyE2S95d2QlVB3-r_q1hebD6R0tav7WlLBViMv3vr41I7OKtRDkFku8ZTTNUAu4CTu4bL-I50of85TvAvWMcH8ysIakKO2t1EkGeTMowTic5yV9KYw1M6gf5RtbYbT1E3KC3xYQ1F_q',
    color: '#EFF6FF'
  },
  {
    id: '3',
    name: 'Snacks & Drinks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqHJHnNztFPVZQQEf6i6gxSbKHp9EDp98Sow9zI9AxSbVZdeD1CpYkZuSWHzCtL6mMyB6W3rEY4zcDUXCZzBotNQbc8LGhxP5oT-DWmpQMc5sjRXzpxQuk73prG7SZsrVe2AaH21KV0JJNwFsUitppqn1vFw0_RLT_AhHnNN6VGh0ZKxbE9WHbdkXC3djRRq8uNuZpTeKAHQXgXu03ZNZRS3VeOQBUsXwRHVy8mIynmgoV2Aw-52c9uqkcOfjVsaxs05DPH1QHDR0_',
    color: '#FFF7ED'
  },
  {
    id: '4',
    name: 'Fresh produce',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaUNrzvqv7RO1CX_Dk8EpCYfcp4F6Grfe6XzPGj5zpR42Jm-gEhajmUEwa5Y8Iz1ju1l1o0XoOCBjUuyQTmNObd7RrVcE9D_0O-HrNJKmkouTrmFuSrUuhq2vChCLtXPidM9Kjjwpk-zgS4iCDl-GqSDxO7tCRKuhhFcb6-UuNGwUo6pExorOrPiZzD7JxC6vBSSWENa_tta4MeST7Ywm7oS0-q4DG00qQ_sEaBeQwYD2aIe14KkyCnMyg2JyErZwI9so1XjTR1UIY',
    color: '#F0FDF4'
  },
  {
    id: '5',
    name: 'Household',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9x_h_p4SciUbP5ADmcyD1rPge5J0MQiZJxxLzPD4kzuKGbDqIupmxNrTzAoGeDFUhZn74ZdW-Ej2yOJqroVQY_VygLFSJvROWJRDLTP_r5oej1djubMZugNmsq39srxj63t_C8GXobHalXa-95YepOkwP1c0VOzIAzhVMqAb_PkRyCm2iQsY9slTbL94OtKG3XOpJn5AoVsd284JfqaFRyFVJSZWIL90AGWtFp1X--4FaPNpQV2741kKVsNeh9M-JGbivIMsf4kZt',
    color: '#FAF5FF'
  },
  {
    id: '6',
    name: 'Personal Care',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmJmvDyfd_MlqLtBnM-nhTcEyNkR_elm1ZmRUweZtFsQmIFwYQ-UtIqNVHOvTqsdrcKKgCGu0Lev7MEGdgke9YxK2Co2gmidgEOXzpnFboEL4NMrMuo0lqq_CpmmMsQwZMwNIbpZQFgiWDjaAn71aK--yEDRpQGhfIaVR6Qh4lmE6bO7A4uUxowJmS_kryVq6PqmPNLeAA_teI1ECWdzpB339JjGBdrq3cwKUAmNrqNx9p5lGX-SNSne-EZe9ep3G7Jsi5g30B34nN',
    color: '#FDF2F8'
  }
];

export const PROFILE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDsA8_fjM9kJ8QUT3Ea04JMk633yGaLfr_vMvfBziHao2k_6EbGYV2X7NMyRrrbuIWA95e-Wb1640ZHeFctDtSKaGVbnAno5c7ZY8Fru-k-5L6_kZqkKnMSNE0arVB4QqIHrmoJtHY2RG9wfZe7Tujg3ri2ARiw5I3dLnqzXEtv0n6Z5Rror74d89Uxpkmy8HKOFheRmt9fThgvFsmrIDh2ldIneHqySoFptaW_qwo54kMyQ1dViia1E5oSUKYpjdtyue7vtdsRlBvV";

export const PRODUCTS: Product[] = [
  // Daily Essentials
  {
    id: 'p1',
    categoryId: '1',
    name: 'Fortune Sun Lite Refined Sunflower Oil',
    weight: '1 L',
    price: 135,
    originalPrice: 160,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/19760a.jpg',
    isBestSeller: true
  },
  {
    id: 'p2',
    categoryId: '1',
    name: 'Aashirvaad Shudh Chakki Atta',
    weight: '5 kg',
    price: 240,
    originalPrice: 285,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/160a.jpg'
  },
  {
    id: 'p3',
    categoryId: '1',
    name: 'Tata Salt Vacuum Evaporated Iodised Salt',
    weight: '1 kg',
    price: 28,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/30674a.jpg'
  },

  // Dairy & Bakery
  {
    id: 'p4',
    categoryId: '2',
    name: 'Amul Taaza Homogenised Toned Milk',
    weight: '500 ml',
    price: 27,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/192a.jpg',
    isBestSeller: true
  },
  {
    id: 'p5',
    categoryId: '2',
    name: 'Britannia 100% Whole Wheat Bread',
    weight: '400 g',
    price: 45,
    originalPrice: 50,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/546a.jpg'
  },
  {
    id: 'p6',
    categoryId: '2',
    name: 'Amul Salted Butter Block',
    weight: '100 g',
    price: 58,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/115a.jpg'
  },

  // Snacks & Drinks
  {
    id: 'p7',
    categoryId: '3',
    name: 'Lay\'s India\'s Magic Masala Potato Chips',
    weight: '50 g',
    price: 20,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/11690a.jpg',
    isBestSeller: true
  },
  {
    id: 'p8',
    categoryId: '3',
    name: 'Coca-Cola Soft Drink',
    weight: '750 ml',
    price: 40,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/326a.jpg'
  },
  {
    id: 'p9',
    categoryId: '3',
    name: 'Kurkure Masala Munch Crisps',
    weight: '90 g',
    price: 20,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/16817a.jpg'
  },

  // Fresh Produce
  {
    id: 'p10',
    categoryId: '4',
    name: 'Fresh Onion',
    weight: '1 kg',
    price: 35,
    originalPrice: 60,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/3831a.jpg'
  },
  {
    id: 'p11',
    categoryId: '4',
    name: 'Fresh Tomato - Hybrid',
    weight: '500 g',
    price: 18,
    originalPrice: 25,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/3581a.jpg',
    isBestSeller: true
  },
  {
    id: 'p12',
    categoryId: '4',
    name: 'Banana - Robusta',
    weight: '1 kg',
    price: 45,
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=270,h=270/app/images/products/sliding_image/4397a.jpg'
  }
];