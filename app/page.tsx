"use client";

import { useState, type ReactNode } from "react";
import { recipes } from "./recetas";
const WHATSAPP_NUMBER = "5492241548846";
const STORE_ADDRESS = "Belgrano 1219, Dolores, Buenos Aires";

type Category = "pescados" | "mariscos" | "rebozados" | "conservas";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number | null;
  unit: "kg" | "unidad";
  image?: string;
  category: Category;
};

const products: Product[] = [

  // =========================
  // 🐟 PESCADOS
  // =========================

  {
    id: 2,
    name: "Filet de merluza",
    description: "Filet Despinado.",
    price: 13000,
    unit: "kg",
    image: "/productos/merluza.jpeg",
    category: "pescados",
  },

  {
    id: 3,
    name: "Salmón Rosado",
    description: "Salmón rosado fresco, ideal para horno, plancha, parrilla o sushi.",
    price: 42000,
    unit: "kg",
    image: "/productos/salmonrosado.jpeg",
    category: "pescados",
  },

  {
    id: 4,
    name: "Abadejo",
    description: "Pescado de carne firme y sabor suave.",
    price: null,
    unit: "kg",
    image: "/productos/abadejo.jpg",
    category: "pescados",
  },

  {
    id: 5,
    name: "Anchoa",
    description: "Anchoa seleccionada, ideal para distintas preparaciones.",
    price: 19200,
    unit: "kg",
    image: "/productos/anchoa de banco.jpg",
    category: "pescados",
  },

  {
    id: 6,
    name: "Besugo",
    description: "Besugo seleccionado, ideal para horno o plancha.",
    price: null,
    unit: "kg",
    image: "/productos/besugo.jpeg",
    category: "pescados",
  },

  {
    id: 7,
    name: "Calamar",
    description: "Calamar fresco para distintas preparaciones.",
    price: null,
    unit: "kg",
    image: "/productos/calamar.jpeg",
    category: "pescados",
  },

  {
    id: 8,
    name: "Chernia",
    description: "Chernia seleccionada, de carne firme y sabor delicado.",
    price: null,
    unit: "kg",
    image: "/productos/chernia.jpg",
    category: "pescados",
  },

  {
    id: 9,
    name: "Corvina",
    description: "Corvina fresca, ideal para horno, plancha o parrilla.",
    price: 9000,
    unit: "kg",
    image: "/productos/corbina rubia.jpg",
    category: "pescados",
  },

  {
    id: 10,
    name: "Filet de lomo",
    description: "Filet fresco, ideal para niños.",
    price: 15500,
    unit: "kg",
    image: "/productos/lomo.jpeg",
    category: "pescados",
  },

  {
    id: 11,
    name: "Gallo",
    description: "Pescado seleccionado, ideal para distintas preparaciones.",
    price: null,
    unit: "kg",
    image: "/productos/pezgallo.jpeg",
    category: "pescados",
  },

  {
    id: 12,
    name: "Lenguado",
    description: "Lenguado seleccionado, de sabor suave y delicado.",
    price: null,
    unit: "kg",
    image: "/productos/lenguado.jpeg",
    category: "pescados",
  },

  {
    id: 13,
    name: "Magru",
    description: "Magru seleccionado para tus mejores recetas.",
    price: 18000,
    unit: "kg",
    image: "/productos/magru.jpg",
    category: "pescados",
  },

  {
    id: 14,
    name: "Mero",
    description: "Mero seleccionado, ideal para horno o plancha.",
    price: 12000,
    unit: "kg",
    image: "/productos/mero.jpg",
    category: "pescados",
  },

  {
    id: 15,
    name: "Pejerrey",
    description: "Pejerrey seleccionado, fresco y de sabor suave.",
    price: 15000,
    unit: "kg",
    image: "/productos/pejerrey.jpeg.jpeg",
    category: "pescados",
  },

  {
    id: 16,
    name: "Pez pollo",
    description: "Pez pollo seleccionado para distintas preparaciones.",
    price: null,
    unit: "kg",
    image: "/productos/pezpollo.jpeg",
    category: "pescados",
  },

  {
    id: 17,
    name: "Trucha patagónica",
    description: "Trucha patagónica para cualquier ocasion.",
    price: null,
    unit: "kg",
    image: "/productos/trucha.jpg",
    category: "pescados",
  },
  {
    id: 54,
    name: "Pescadilla entera",
    description: "Pescadilla entera fresca, ideal para horno o parrilla.",
    price: 9500,
    unit: "kg",
    image: "/productos/pescadilla.jpg",
    category: "pescados",
  },

  {
    id: 55,
    name: "Filet de pescadilla",
    description: "Filet de pescadilla fresco y suave, ideal para distintas preparaciones.",
    price: 12500,
    unit: "kg",
    image: "/productos/filet pescadilla.jpg",
    category: "pescados",
  },
  {
    id: 56,
    name: "Cornalitos",
    description: "fresco y suave, ideal para picar.",
    price: 12500,
    unit: "kg",
    image: "/productos/cornalitos.jpg",
    category: "pescados",
  },


  // =========================
  // 🍤 REBOZADOS
  // =========================

  {
    id: 18,
    name: "Albóndigas de merluza",
    description: "Albóndigas elaboradas a base de merluza.",
    price: 10000,
    unit: "kg",
    image: "/productos/albondigas.jpeg",
    category: "rebozados",
  },

  {
    id: 19,
    name: "Bastones de Muzzarella",
    description: "Bastones 100% muzzarella, listos para cocinar.",
    price: 14000,
    unit: "kg",
    image: "/productos/baston muzza.jpg",
    category: "rebozados",
  },

  {
    id: 20,
    name: "Formitas de Merluza",
    description: "Formitas de merluza listas para cocinar.",
    price: null,
    unit: "kg",
    image: "/productos/formitas.jpg",
    category: "rebozados",
  },

  {
    id: 21,
    name: "Hamburguesa de merluza",
    description: "Hamburguesa elaborada a base de merluza.",
    price: 14000,
    unit: "kg",
    image: "/productos/hamburguesa.jpeg",
    category: "rebozados",
  },

  {
    id: 22,
    name: "Langostino empanado",
    description: "Langostinos empanados listos para cocinar.",
    price: null,
    unit: "kg",
    image: "/productos/lang emp.jpg",
    category: "rebozados",
  },

  {
    id: 23,
    name: "Medallón de Pollo",
    description: "Medallón de pollo listo para cocinar.",
    price: 9000,
    unit: "kg",
    image: "/productos/med pollo.jpg",
    category: "rebozados",
  },

  {
    id: 24,
    name: "Medallón de Pollo JyQ",
    description: "Medallón de pollo con jamón y queso.",
    price: 11000,
    unit: "kg",
    image: "/productos/med pollo jyq.webp",
    category: "rebozados",
  },

  {
    id: 25,
    name: "Medallón de Merluza",
    description: "Medallón elaborado a base de merluza.",
    price: 9500,
    unit: "kg",
    image: "/productos/med mzaa.jpg",
    category: "rebozados",
  },

  {
    id: 26,
    name: "Medallón de Merluza con espinaca",
    description: "Medallón de merluza con espinaca.",
    price: 10000,
    unit: "kg",
    image: "/productos/med mza esp.jpg",
    category: "rebozados",
  },

  {
    id: 27,
    name: "Medallón de Merluza Finas Hierbas",
    description: "Medallón de merluza con finas hierbas.",
    price: 10000,
    unit: "kg",
    image: "/productos/med FH.jpeg",
    category: "rebozados",
  },

  {
    id: 28,
    name: "Medallón de Merluza JyQ",
    description: "Medallón de merluza con jamón y queso.",
    price: 12000,
    unit: "kg",
    image: "/productos/med mzajyq.jpg",
    category: "rebozados",
  },

  {
    id: 29,
    name: "Milanesa de merluza caseras",
    description: "Milanesas de merluza caseras, listas para cocinar.",
    price: 15000,
    unit: "kg",
    image: "/productos/milacaserasmza.jpg",
    category: "rebozados",
  },

  {
    id: 30,
    name: "Milanesa de merluza rebozado finas hierbas",
    description: "Milanesas de merluza con rebozado de finas hierbas.",
    price: 15500,
    unit: "kg",
    image: "/productos/mila fh.jpeg",
    category: "rebozados",
  },

  {
    id: 31,
    name: "Milanesa de Merluza Rebozado Común",
    description: "Milanesas de merluza con rebozado común.",
    price: 15000,
    unit: "kg",
    image: "/productos/mila comun.jpeg",
    category: "rebozados",
  },

  {
    id: 32,
    name: "Rabas rebozadas",
    description: "Rabas rebozadas listas para cocinar.",
    price: null,
    unit: "kg",
    image: "/productos/rabas reb.jpeg",
    category: "rebozados",
  },


  // =========================
  // 🦐 MARISCOS
  // =========================

  {
    id: 33,
    name: "Algas",
    description: "Algas seleccionadas para distintas preparaciones.",
    price: null,
    unit: "unidad",
    image: "/productos/algas.jpeg",
    category: "mariscos",
  },

  {
    id: 34,
    name: "Almeja",
    description: "Almejas seleccionadas para tus mejores recetas.",
    price: 28000,
    unit: "kg",
    image: "/productos/almejas.jpeg",
    category: "mariscos",
  },

  {
    id: 35,
    name: "Camarón pelado",
    description: "Camarón pelado, práctico y listo para cocinar.",
    price: 34000,
    unit: "kg",
    image: "/productos/camaron.jpg",
    category: "mariscos",
  },

  {
    id: 36,
    name: "Cazuela de Mariscos",
    description: "Cazuela de mariscos lista para preparar.",
    price: 28000,
    unit: "kg",
    image: "/productos/cazuela.jpeg.jpeg",
    category: "mariscos",
  },

  {
    id: 37,
    name: "Kani kama",
    description: "Kani kama seleccionado.",
    price: null,
    unit: "unidad",
    image: "/productos/kanikama.jpeg.jpeg",
    category: "mariscos",
  },

  {
    id: 38,
    name: "Langostino pelado",
    description: "Langostino pelado, práctico y listo para cocinar.",
    price: 30000,
    unit: "kg",
    image: "/productos/langostino.jpeg",
    category: "mariscos",
  },

  {
    id: 39,
    name: "Langostinos enteros",
    description: "Langostinos enteros seleccionados.",
    price: 20000,
    unit: "kg",
    image: "/productos/langostinoentero.jpeg.jpeg",
    category: "mariscos",
  },

  {
    id: 40,
    name: "Mejillones",
    description: "Mejillones seleccionados para distintas preparaciones.",
    price: 26000,
    unit: "kg",
    image: "/productos/mejillones.jpeg",
    category: "mariscos",
  },

  {
    id: 41,
    name: "Rabas",
    description: "Rabas seleccionadas, listas para cocinar.",
    price: 26000,
    unit: "kg",
    image: "/productos/rabas.jpg",
    category: "mariscos",
  },

  {
    id: 42,
    name: "Salmón ahumado",
    description: "Salmón ahumado seleccionado.",
    price: 10000,
    unit: "unidad",
    image: "/productos/salmonahumado.jpeg.jpeg",
    category: "mariscos",
  },

  {
    id: 43,
    name: "Tentáculos de calamar",
    description: "Tentáculos de calamar seleccionados.",
    price: null,
    unit: "kg",
    image: "/productos/tentaculo.jpg",
    category: "mariscos",
  },


  // =========================
  // 🥫 CONSERVAS
  // =========================

  {
    id: 44,
    name: "Atún al natural",
    description: "Atún conservado al natural.",
    price: 5600,
    unit: "unidad",
    image: "/productos/atunalnatural.jpeg.jpeg",
    category: "conservas",
  },

  {
    id: 45,
    name: "Atún en aceite",
    description: "Atún en aceite, ideal para ensaladas y comidas.",
    price: 5600,
    unit: "unidad",
    image: "/productos/atun en aceite.jpeg",
    category: "conservas",
  },

  {
    id: 46,
    name: "Caballa al natural",
    description: "Caballa conservada al natural.",
    price: 5000,
    unit: "unidad",
    image: "/productos/caballaalnatural.jpeg.jpeg",
    category: "conservas",
  },

  {
    id: 47,
    name: "Caballa al tomate",
    description: "Caballa con salsa de tomate.",
    price: 5000,
    unit: "unidad",
    image: "/productos/caballo en tomate.jpeg",
    category: "conservas",
  },

  {
    id: 48,
    name: "Caballa en aceite",
    description: "Caballa conservada en aceite.",
    price: 5000,
    unit: "unidad",
    image: "/productos/caballenaceite.jpeg.jpeg",
    category: "conservas",
  },

  {
    id: 49,
    name: "Sardinas en aceite",
    description: "Sardinas conservadas en aceite.",
    price: 6000,
    unit: "unidad",
    image: "/productos/sardinaenaceite.jpeg.jpeg",
    category: "conservas",
  },

  {
    id: 50,
    name: "Sardinas en tomate",
    description: "Sardinas acompañadas con salsa de tomate.",
    price: 6000,
    unit: "unidad",
    image: "/productos/sardinasentomate.jpeg.jpeg",
    category: "conservas",
  },
{
    id: 51,
    name: "Lomito de atún en aceite y agua",
    description: "Lomito de atún, ideal para ensaladas, picadas y comidas.",
    price: 5200,
    unit: "unidad",
    image: "/productos/lomito de atun en aceite y agua.jpeg",
    category: "conservas",
  },

  {
    id: 52,
    name: "Escabeche de vizcacha artesanal",
    description: "Escabeche de vizcacha, preparado para disfrutar frío o como entrada.",
    price: 13000,
    unit: "unidad",
    image: "/productos/escaveche de vizcacha.jpeg",
    category: "conservas",
  },
  {
    id: 57,
    name: "Lomito de atún al natural",
    description: "Lomito de atún, ideal para ensaladas, picadas y comidas.",
    price: 5200,
    unit: "unidad",
    image: "/productos/lomito de atun al natural.jpeg",
    category: "conservas",
  },
  {
    id: 58,
    name: "atun desmenuzado en aceite y agua",
    description: "Lomito de atún, ideal para ensaladas, picadas y comidas.",
    price: 3200,
    unit: "unidad",
    image: "/productos/atun desmenuzado en aceite y agua.jpeg",
    category: "conservas",
  },
];

const categoryInfo: Record<Category, { title: string; subtitle: string; icon: string }> = {
  pescados: { title: "Pescados", subtitle: "Frescura seleccionada", icon: "🐟" },
  mariscos: { title: "Mariscos", subtitle: "Sabor del mar", icon: "🦐" },
  rebozados: { title: "Rebozados", subtitle: "Listos para cocinar", icon: "🍤" },
  conservas: { title: "Conservas", subtitle: "Prácticas y sabrosas", icon: "🥫" },
};

type IconName = "fish" | "shrimp" | "can" | "truck" | "snow" | "heart" | "shield" | "pin" | "phone" | "instagram" | "cart" | "clock" | "check";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, ReactNode> = {
    fish: <><path d="M3 12s3.5-6 9-6c3.8 0 6.4 2.4 8.5 6-2.1 3.6-4.7 6-8.5 6-5.5 0-9-6-9-6Z"/><path d="M3 12 1 10v4l2-2Z"/><circle cx="15.5" cy="10" r=".8" fill="currentColor" stroke="none"/><path d="M12 9.5c1.2 1.5 1.2 3.5 0 5"/></>,
    shrimp: <><path d="M20 5c-4 0-7 2-8 5-1 3-4 4-7 3"/><path d="M5 13c1 4 4 6 8 6 4 0 7-3 7-7"/><path d="M8 8c-2 0-4 1-5 3"/><circle cx="19" cy="5" r="1"/><path d="m13 10 2 2-2 2"/></>,
    can: <><path d="M5 5h14v14H5z"/><path d="M5 8h14M5 16h14"/><path d="M8 11h8"/></>,
    truck: <><path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    snow: <><path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18M7 4l5 3 5-3M7 20l5-3 5 3M2 12h20"/></>,
    heart: <path d="M20.8 8.8c0 5.3-8.8 11-8.8 11s-8.8-5.7-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z"/>,
    shield: <><path d="M12 3l8 3v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    phone: <><path d="M6.5 3.5 9 3l2 4-2 1.5c1 2.2 2.3 3.5 4.5 4.5L15 11l4 2 .5 2.5C18.5 18 16.5 20 14 19.5 8 18 5 15 4.5 10 4 7.5 4.8 5.2 6.5 3.5Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor" stroke="none"/></>,
    cart: <><path d="M3 4h2l2 11h10l2-8H6"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  };

  return <svg {...common} aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [activeCategory, setActiveCategory] = useState<Category>("pescados");
  const [showForm, setShowForm] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState<"retiro" | "domicilio">("retiro");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Dolores");
  const [payment, setPayment] = useState<"efectivo" | "transferencia" | "debito" | "credito">("efectivo");
  const [notes, setNotes] = useState("");
const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

 const formatPrice = (price: number | null) => {
  if (price === null) return "CONSULTAR PRECIO";

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
};

  const addToCart = (id: number) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    setCart((current) => {
      const currentQuantity = current[id] || 0;
      const max = product.unit === "kg" ? 10000 : 10;
      const step = product.unit === "kg" ? 250 : 1;

      if (currentQuantity >= max) {
        alert(product.unit === "kg"
          ? `El máximo permitido es de 10 kg de ${product.name}.`
          : `El máximo permitido es de 10 unidades de ${product.name}.`);
        return current;
      }

      return { ...current, [id]: Math.min(currentQuantity + step, max) };
    });
  };

  const removeFromCart = (id: number) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    setCart((current) => {
      const updated = { ...current };
      const quantity = updated[id] || 0;
      const step = product.unit === "kg" ? 250 : 1;

      if (quantity > step) updated[id] = quantity - step;
      else delete updated[id];

      return updated;
    });
  };

  const cartItems = products.filter((product) => Boolean(cart[product.id]));

  const total = cartItems.reduce((sum, product) => {
  const quantity = cart[product.id];

  if (product.price === null) {
    return sum;
  }

  return sum + (
    product.unit === "kg"
      ? product.price * quantity / 1000
      : product.price * quantity
  );
}, 0);

  const totalItems = cartItems.length;
  const hasProductsWithoutPrice = cartItems.some(
  (product) => product.price === null
);

  const getQuantityText = (product: Product) => {
    const quantity = cart[product.id];
    if (!quantity) return product.unit === "kg" ? "250 g" : "1 unidad";

    if (product.unit === "kg") {
      const kg = quantity / 1000;
      return kg >= 1 ? `${kg % 1 === 0 ? kg : kg.toFixed(2)} kg` : `${quantity} g`;
    }

    return `${quantity} ${quantity === 1 ? "unidad" : "unidades"}`;
  };

 const getSubtotal = (product: Product) => {
  const quantity = cart[product.id] || 0;

  if (product.price === null) {
    return null;
  }

  return product.unit === "kg"
    ? product.price * quantity / 1000
    : product.price * quantity;
}; 

  const scrollTo = (id: string) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const continueOrder = () => {
    if (!cartItems.length) {
      alert("Primero agregá al menos un producto.");
      return;
    }
    setShowForm(true);
    setTimeout(() => document.getElementById("datos-pedido")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const sendOrderToWhatsApp = () => {
  if (!name.trim()) {
    return alert("Por favor completá tu nombre y apellido.");
  }

  if (!phone.trim()) {
    return alert("Por favor completá tu teléfono.");
  }

  if (delivery === "domicilio" && !address.trim()) {
    return alert("Por favor completá tu domicilio.");
  }

  if (delivery === "domicilio" && !city.trim()) {
    return alert("Por favor completá tu localidad.");
  }

  if (!cartItems.length) {
    return alert("El carrito está vacío.");
  }

  const productsText = cartItems
    .map((product) => {
      const quantityText = getQuantityText(product);

      const priceText =
        product.price === null
          ? "CONSULTAR PRECIO"
          : formatPrice(getSubtotal(product));

      return `${product.name} — ${quantityText} — ${priceText}`;
    })
    .join("\n");

  const deliveryText =
    delivery === "retiro"
      ? "Retiro en el local"
      : `Envío a domicilio
Domicilio: ${address}
Localidad: ${city}`;

  const paymentText = {
    efectivo: "Efectivo",
    transferencia: "Transferencia",
    debito: "Débito",
    credito: "Crédito",
  }[payment];

  const hasConsultPrice = cartItems.some(
    (product) => product.price === null
  );

  const totalText = hasConsultPrice
    ? `${formatPrice(total)} + productos a consultar`
    : formatPrice(total);

  const message = `PESCADERÍA DON FELIPE

NUEVO PEDIDO

Cliente: ${name}
Teléfono: ${phone}

PRODUCTOS:
${productsText}

${deliveryText}

FORMA DE PAGO:
${paymentText}

OBSERVACIONES:
${notes.trim() || "Sin observaciones"}

TOTAL:
${totalText}

${STORE_ADDRESS}

¡Gracias por elegir Pescadería Don Felipe!`;

 window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; 
};

  const visibleProducts = products.filter((product) => product.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#071a33] selection:bg-[#c89b3c] selection:text-white">
     {/* NAVBAR PREMIUM */}
<header className="sticky top-0 z-50 border-b border-[#c89b3c]/30 bg-[#071a33]/95 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
  <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">

    {/* LOGO */}
    <button
      onClick={() => scrollTo("inicio")}
      className="group flex items-center gap-3 text-left"
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#c89b3c] bg-white shadow-lg transition duration-300 group-hover:scale-105">
        <img
          src="/logo-don-felipe.jpeg"
          alt="Pescadería Don Felipe"
          className="h-full w-full object-contain p-1"
        />
      </div>

      <div className="hidden sm:block">
        <div className="text-[10px] font-bold tracking-[0.28em] text-[#d9b45c]">
          PESCADERÍA
        </div>

       <div className="text-lg font-black leading-tight tracking-wide">
  DON FELIPE
</div>

<div className="mt-1 text-[9px] font-black tracking-[0.18em] text-[#e0b33f] sm:text-[10px]">
  VENTAS POR MAYOR Y MENOR
</div>

        <div className="text-[9px] tracking-wide text-white/55">
          Pescados · Mariscos · Frescura
        </div>
      </div>
    </button>

    {/* NAVEGACIÓN DESKTOP */}
    <nav className="hidden items-center gap-1 lg:flex">
      {[
        ["inicio", "INICIO"],
        ["productos", "PRODUCTOS"],
        ["recetas", "RECETAS"],
        ["contacto", "CONTACTO"],
      ].map(([id, label]) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative rounded-lg px-4 py-3 text-xs font-black tracking-wide text-white/80 transition hover:text-[#d9b45c]"
        >
          {label}

          <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#c89b3c] transition-all duration-300 group-hover:w-8" />
        </button>
      ))}
    </nav>

    {/* PEDIDO + MOBILE */}
    <div className="flex items-center gap-2">

      <button
        onClick={() => scrollTo("carrito")}
        className="group flex items-center gap-2 rounded-xl bg-[#c89b3c] px-4 py-3 text-sm font-black text-[#071a33] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#ddb65a] hover:shadow-xl"
      >
        <Icon name="cart" size={18} />

        <span className="hidden sm:inline">
          MI PEDIDO
        </span>

        {totalItems > 0 && (
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#071a33] px-1.5 text-xs font-bold text-white">
            {totalItems}
          </span>
        )}
      </button>

      <button
        onClick={() => setMobileMenu((value) => !value)}
        aria-label="Abrir menú"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-xl transition hover:border-[#c89b3c]/50 hover:bg-white/10 lg:hidden"
      >
        {mobileMenu ? "×" : "☰"}
      </button>

    </div>
  </div>

  {/* MENÚ MOBILE */}
  {mobileMenu && (
    <div className="border-t border-[#c89b3c]/20 bg-[#071a33] px-5 py-4 shadow-xl lg:hidden">
      <div className="mx-auto grid max-w-7xl gap-1">

        {[
          ["inicio", "Inicio"],
          ["productos", "Productos"],
          ["recetas", "Recetas"],
          ["contacto", "Contacto"],
          ["carrito", "Mi pedido"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => {
              scrollTo(id);
              setMobileMenu(false);
            }}
            className="rounded-xl px-4 py-3 text-left text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-[#d9b45c]"
          >
            {label}
          </button>
        ))}

      </div>
    </div>
  )}
</header> 

      {/* HERO PREMIUM */}
<section
  id="inicio"
  className="relative isolate overflow-hidden bg-[#071a33] text-white"
>
  {/* FONDO */}
  <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_42%,rgba(200,155,60,0.20),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(20,83,130,0.35),transparent_35%),linear-gradient(135deg,#06172c_0%,#071a33_48%,#0d2b4b_100%)]" />

  {/* DESTELLOS DECORATIVOS */}
  <div className="absolute -right-48 -top-48 -z-10 h-[620px] w-[620px] rounded-full border border-[#c89b3c]/15" />
  <div className="absolute -right-28 -top-28 -z-10 h-[500px] w-[500px] rounded-full border border-[#c89b3c]/10" />
  <div className="absolute -bottom-64 -left-32 -z-10 h-[500px] w-[500px] rounded-full bg-[#c89b3c]/5 blur-3xl" />

  {/* CONTENIDO */}
  <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-8 sm:gap-10 sm:px-8 sm:py-12 md:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-6 lg:px-8 lg:py-24">

    {/* COLUMNA IZQUIERDA */}
    <div className="relative z-10 max-w-2xl">

      {/* ETIQUETA */}
      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-12 bg-[#c89b3c]" />

        <span className="text-[11px] font-black tracking-[0.32em] text-[#d9b45c]">
          FRESCURA · CALIDAD · CONFIANZA
        </span>
      </div>

      {/* TITULAR */}
      <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[78px]">
        Frescura que
        <span className="mt-3 block text-[#e0b33f]">
          llega a tu mesa.
        </span>
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
        Pescados, mariscos, rebozados y conservas seleccionados
        para que disfrutes lo mejor del mar.
      </p>

      {/* BOTONES */}
<div className="mt-9 flex flex-col gap-3 sm:flex-row">

  <button
    type="button"
    onClick={() => scrollTo("productos")}
    className="group flex items-center justify-center gap-2 rounded-xl bg-[#c89b3c] px-7 py-4 text-sm font-black text-[#071a33] shadow-[0_12px_35px_rgba(200,155,60,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-[#ddb65a] hover:shadow-[0_18px_40px_rgba(200,155,60,0.28)]"
  >
    VER PRODUCTOS

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>

  <button
    type="button"
    onClick={() => {
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    }}
    className="group flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[0.04] px-7 py-4 text-sm font-black text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/60 hover:bg-white/[0.08]"
  >
    <Icon name="phone" size={18} />
    HACER UN PEDIDO
  </button>

</div>

      {/* DIFERENCIALES */}
      <div className="mt-11 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">

        {/* PESCADOS */}
        <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition duration-300 hover:border-[#c89b3c]/30 hover:bg-white/[0.06]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#c89b3c]/10 text-[#d9b45c]">
            <Icon name="fish" size={21} />
          </div>

          <div className="text-xs font-black tracking-wide text-white">
            PESCADOS
          </div>

          <div className="mt-1 text-[11px] text-white/50">
            Seleccionados
          </div>
        </div>

        {/* MARISCOS */}
        <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition duration-300 hover:border-[#c89b3c]/30 hover:bg-white/[0.06]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#c89b3c]/10 text-[#d9b45c]">
            <Icon name="shrimp" size={21} />
          </div>

          <div className="text-xs font-black tracking-wide text-white">
            MARISCOS
          </div>

          <div className="mt-1 text-[11px] text-white/50">
            Variedad y sabor
          </div>
        </div>

        {/* CONSERVAS */}
        <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-sm transition duration-300 hover:border-[#c89b3c]/30 hover:bg-white/[0.06]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#c89b3c]/10 text-[#d9b45c]">
            <Icon name="can" size={21} />
          </div>

          <div className="text-xs font-black tracking-wide text-white">
            CONSERVAS
          </div>

          <div className="mt-1 text-[11px] text-white/50">
            Atún y caballa
          </div>
        </div>

      </div>
    </div>

    {/* COLUMNA DERECHA — LOGO */}
    <div className="relative flex min-h-[390px] items-center justify-center sm:min-h-[470px] lg:min-h-[560px]">

      {/* ANILLOS */}
      <div className="absolute h-[285px] w-[285px] rounded-full border border-[#c89b3c]/30 sm:h-[390px] sm:w-[390px] lg:h-[470px] lg:w-[470px]" />

      <div className="absolute h-[340px] w-[340px] rounded-full border border-[#c89b3c]/12 sm:h-[450px] sm:w-[450px] lg:h-[540px] lg:w-[540px]" />

      {/* HALO */}
      <div className="absolute h-[280px] w-[280px] rounded-full bg-[#c89b3c]/10 blur-[70px] sm:h-[360px] sm:w-[360px]" />

      {/* LOGO */}
      <div className="relative z-10 h-[285px] w-[285px] overflow-hidden rounded-full border-[5px] border-[#c89b3c] bg-[#fffdf8] shadow-[0_30px_90px_rgba(0,0,0,0.40)] sm:h-[370px] sm:w-[370px] sm:border-[6px] lg:h-[430px] lg:w-[430px]">

        <img
          src="/logo-don-felipe.jpeg"
          alt="Pescadería Don Felipe"
          className="h-full w-full object-contain p-3 sm:p-4"
        />

      </div>

      {/* UBICACIÓN */}
      <div className="absolute bottom-3 z-20 flex items-center gap-2 rounded-full border border-[#c89b3c] bg-[#071a33]/95 px-5 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:bottom-5">
        <span className="text-[#d9b45c]">
          <Icon name="pin" size={16} />
        </span>

        <span className="text-[11px] font-black tracking-[0.08em] text-[#e0b33f] sm:text-xs">
          BELGRANO 1219 · DOLORES
        </span>
      </div>

    </div>

  </div>

  {/* LÍNEA INFERIOR */}
  <div className="relative mx-auto max-w-7xl px-5 pb-6 sm:px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-[#c89b3c]/30 to-transparent" />
  </div>

</section>

{/* ENVÍOS SIN CARGO */}
<section className="border-b border-[#c89b3c]/20 bg-[#071a33]">
  <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 sm:py-6">
    <div className="relative overflow-hidden rounded-2xl border border-[#c89b3c]/50 bg-gradient-to-r from-[#071a33] via-[#0d2b4b] to-[#071a33] px-5 py-5 shadow-[0_15px_45px_rgba(7,26,51,0.18)] sm:px-8 sm:py-6">

      {/* DESTELLOS */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c89b3c]/10 blur-2xl" />
      <div className="absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#c89b3c]/10 blur-2xl" />

      <div className="relative flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">

        {/* ÍCONO */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c89b3c]/50 bg-[#c89b3c]/10 text-[#e0b33f] shadow-lg sm:h-16 sm:w-16">
          <Icon name="truck" size={30} />
        </div>

        {/* TEXTO */}
        <div>
          <div className="text-2xl font-black tracking-tight text-white sm:text-4xl">
            ENVÍOS <span className="text-[#e0b33f]">SIN CARGO</span>
          </div>

          <div className="mt-1 text-xs font-semibold tracking-wide text-white/70 sm:text-sm">
            Recibí tu pedido en tu domicilio sin costo de envío
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* TRUST STRIP */}
<section className="border-b border-[#c89b3c]/15 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#071a33]/10 px-5 py-5 md:grid-cols-4">
          {[
            [<Icon name="snow" size={25} />, "Cadena de frío", "100% cuidada"],
            [<Icon name="shield" size={25} />, "Calidad", "Productos seleccionados"],
            [<Icon name="truck" size={25} />, "Entrega", "Rápida y segura"],
            [<Icon name="heart" size={25} />, "Atención", "Personalizada"],
          ].map(([icon, a, b]) => (
            <div key={String(a)} className="flex items-center justify-center gap-3 px-3 py-2 first:pl-0 last:pr-0">
              <div className="text-[#c89b3c]">{icon}</div>
              <div className="hidden sm:block">
                <div className="text-xs font-black text-[#071a33]">{a}</div>
                <div className="text-[10px] text-slate-500">{b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* PRODUCTS */}
<section
  id="productos"
  className="relative overflow-hidden bg-[#f7f3ea] px-5 py-20 md:px-8 md:py-24"
>
  {/* DETALLES DECORATIVOS */}
  <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#c89b3c]/10" />
  <div className="pointer-events-none absolute -left-52 bottom-0 h-[550px] w-[550px] rounded-full border border-[#071a33]/5" />

  <div className="relative mx-auto max-w-7xl">

    {/* ENCABEZADO */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-11 bg-[#c89b3c]" />
          <span className="text-xs font-black tracking-[0.28em] text-[#9b731e]">
            NUESTRO CATÁLOGO
          </span>
        </div>

        <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#071a33] md:text-5xl">
          Lo mejor del mar,
          <span className="block text-[#c89b3c]">
            elegido para vos.
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          Productos seleccionados, frescos y listos para llevar.
          Elegí lo que necesitás y armá tu pedido de manera simple.
        </p>
      </div>

      <button
        onClick={() => scrollTo("carrito")}
        className="group flex w-fit items-center gap-3 rounded-2xl border border-[#071a33]/10 bg-white px-5 py-3.5 text-sm font-black text-[#071a33] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/60 hover:shadow-lg"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2ead8] text-[#9b731e] transition group-hover:bg-[#c89b3c] group-hover:text-[#071a33]">
          <Icon name="cart" size={18} />
        </span>

        <span>
          <span className="block text-[10px] font-bold tracking-wider text-slate-400">
            TU PEDIDO
          </span>
          <span className="block">
            VER MI PEDIDO
          </span>
        </span>

        {totalItems > 0 && (
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#071a33] px-2 text-xs font-black text-white">
            {totalItems}
          </span>
        )}
      </button>
    </div>

    {/* CATEGORÍAS */}
    <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">

      {(Object.keys(categoryInfo) as Category[]).map((category) => {
        const active = activeCategory === category;
        const info = categoryInfo[category];

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
              active
                ? "border-[#c89b3c] bg-[#071a33] text-white shadow-[0_15px_40px_rgba(7,26,51,0.22)]"
                : "border-[#071a33]/10 bg-white text-[#071a33] hover:-translate-y-1 hover:border-[#c89b3c]/50 hover:shadow-xl"
            }`}
          >

            {/* línea superior */}
            <div
              className={`absolute left-0 right-0 top-0 h-1 transition ${
                active ? "bg-[#c89b3c]" : "bg-transparent group-hover:bg-[#c89b3c]/40"
              }`}
            />

            <div className="flex items-center gap-4">

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition ${
                  active
                    ? "bg-[#c89b3c]/15"
                    : "bg-[#f2ead8] group-hover:bg-[#f0e3c5]"
                }`}
              >
                {info.icon}
              </div>

              <div className="min-w-0">
                <div className="text-sm font-black sm:text-base">
                  {info.title}
                </div>

                <div
                  className={`mt-1 text-[10px] sm:text-xs ${
                    active
                      ? "text-white/55"
                      : "text-slate-500"
                  }`}
                >
                  {info.subtitle}
                </div>
              </div>

            </div>

            {active && (
              <div className="absolute bottom-0 right-0 h-12 w-12 rounded-tl-full bg-[#c89b3c]/10" />
            )}

          </button>
        );
      })}

    </div>

    {/* CABECERA DE CATEGORÍA */}
    <div className="mt-12 flex items-end justify-between border-b border-[#071a33]/10 pb-4">

      <div>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#c89b3c]" />

          <h3 className="text-2xl font-black tracking-tight text-[#071a33]">
            {categoryInfo[activeCategory].title}
          </h3>
        </div>

        <div className="mt-1 pl-5 text-sm text-slate-500">
          {visibleProducts.length}{" "}
          {visibleProducts.length === 1
            ? "producto disponible"
            : "productos disponibles"}
        </div>
      </div>

      <div className="hidden items-center gap-2 rounded-full border border-[#c89b3c]/20 bg-white px-4 py-2 text-xs font-bold text-[#80601a] shadow-sm sm:flex">
        <span className="h-2 w-2 rounded-full bg-[#c89b3c]" />
        Cantidad personalizada
      </div>

    </div>

    {/* PRODUCTOS */}
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {visibleProducts.map((product) => {

        const quantity = cart[product.id] || 0;

        const max =
          product.unit === "kg"
            ? 10000
            : 10;

        const maxReached =
          quantity >= max;

        return (
          <article
            key={product.id}
            className={`group relative overflow-hidden rounded-[28px] border bg-white transition-all duration-500 ${
              quantity > 0
                ? "border-[#c89b3c]/60 shadow-[0_20px_55px_rgba(7,26,51,0.12)]"
                : "border-[#071a33]/10 shadow-sm hover:-translate-y-2 hover:border-[#c89b3c]/40 hover:shadow-[0_25px_60px_rgba(7,26,51,0.13)]"
            }`}
          >

            {/* IMAGEN */}
            <div className="relative h-64 overflow-hidden bg-[#eee7d9]">

              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#f3ead8] to-[#e6dcc6] text-7xl">
                  🥫
                </div>
              )}

              {/* degradado */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent opacity-60" />

              {/* ETIQUETA */}
              <div className="absolute left-4 top-4 rounded-full border border-[#c89b3c]/40 bg-[#071a33]/95 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#e4bd5c] shadow-lg backdrop-blur">
                {product.unit === "kg"
                  ? "POR KILO"
                  : "POR UNIDAD"}
              </div>

              {/* PRODUCTO AGREGADO */}
              {quantity > 0 && (
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#071a33]/95 px-3 py-2 text-[10px] font-black text-white shadow-lg backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#c89b3c]" />
                  EN TU PEDIDO
                </div>
              )}

            </div>

            {/* CONTENIDO */}
            <div className="p-6">

              <h3 className="text-xl font-black tracking-tight text-[#071a33]">
                {product.name}
              </h3>

              <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                {product.description}
              </p>

              {/* PRECIO */}
              <div className="mt-5 flex items-end justify-between gap-3">

                <div>
                  <div className="flex items-baseline gap-2">
                    
                  </div>
{product.price === null ? (
  <span className="inline-flex items-center rounded-lg border border-[#c89b3c]/30 bg-[#f3ead8] px-3 py-2 text-sm font-black tracking-wide text-[#80601a]">
    CONSULTAR PRECIO
  </span>
) : (
  <span className="text-2xl font-black tracking-tight text-[#071a33]">
    {formatPrice(product.price)}
  </span>
)}
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#9b731e]">
                    Por {product.unit === "kg" ? "kilogramo" : "unidad"}
                  </div>
                </div>

                {quantity > 0 && (
                  <div className="rounded-full border border-[#c89b3c]/25 bg-[#f3ead8] px-3 py-1.5 text-[11px] font-black text-[#80601a]">
                    {getQuantityText(product)}
                  </div>
                )}

              </div>

              {/* CANTIDAD */}
              <div className="mt-6">

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#071a33]/70">
                    Elegí cantidad
                  </span>

                  <span className="text-[10px] font-semibold text-slate-400">
                    Máx.{" "}
                    {product.unit === "kg"
                      ? "10 kg"
                      : "10 unidades"}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-[#071a33]/5 bg-[#f4f1e9] p-2">

                  {/* MENOS */}
                  <button
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                    disabled={!quantity}
                    aria-label={`Quitar ${product.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-medium text-[#071a33] shadow-sm transition hover:bg-[#eee5d2] disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    −
                  </button>

                  {/* CANTIDAD */}
                  <div className="text-center">

                    <div className="text-sm font-black text-[#071a33]">
                      {getQuantityText(product)}
                    </div>

                    <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                      {product.unit === "kg"
                        ? "Pasos de 250 g"
                        : "Pasos de 1 unidad"}
                    </div>

                  </div>

                  {/* MÁS */}
                  <button
                    onClick={() =>
                      addToCart(product.id)
                    }
                    disabled={maxReached}
                    aria-label={`Agregar ${product.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a33] text-xl font-medium text-white shadow-md transition hover:bg-[#102d50] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    +
                  </button>

                </div>

                {/* BOTÓN */}
                <button
                  onClick={() => {
                    if (!quantity) {
                      addToCart(product.id);
                    }
                  }}
                  className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-black transition-all duration-300 ${
                    quantity
                      ? "border border-[#c89b3c]/20 bg-[#f2ead8] text-[#80601a] hover:bg-[#eadfc7]"
                      : "bg-[#c89b3c] text-[#071a33] shadow-md hover:-translate-y-0.5 hover:bg-[#ddb65a] hover:shadow-lg"
                  }`}
                >
                  <Icon name="cart" size={18} />

                  {quantity
                    ? "PRODUCTO EN EL PEDIDO"
                    : "AGREGAR AL PEDIDO"}
                </button>

              </div>

            </div>

          </article>
        );
      })}

    </div>

    {/* MENSAJE INFERIOR */}
    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#c89b3c]/15 bg-white/70 px-5 py-4 text-center shadow-sm sm:flex-row sm:text-left">

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2ead8] text-[#9b731e]">
          <Icon name="check" size={18} />
        </div>

        <div>
          <div className="text-xs font-black text-[#071a33]">
            Prepará tu pedido a tu medida
          </div>

          <div className="mt-0.5 text-[11px] text-slate-500">
            Podés elegir cantidades desde 250 g.
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("carrito")}
        className="rounded-xl border border-[#071a33]/10 bg-[#071a33] px-5 py-3 text-xs font-black text-white transition hover:bg-[#102d50]"
      >
        IR A MI PEDIDO →
      </button>

    </div>

  </div>
</section>
      {/* CARRITO */}
<section
  id="carrito"
  className="relative overflow-hidden bg-[#071a33] px-5 py-20 text-white md:px-8 md:py-24"
>
  {/* Decoración */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c89b3c]/10" />
  <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#c89b3c]/5 blur-3xl" />

  <div className="relative mx-auto max-w-5xl">

    {/* ENCABEZADO */}
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#c89b3c]" />
          <span className="text-xs font-black tracking-[0.25em] text-[#d9b45c]">
            TU PEDIDO
          </span>
        </div>

        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
          Armá tu pedido
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 md:text-base">
          Revisá los productos, ajustá las cantidades y continuá para
          completar tus datos.
        </p>
      </div>

      <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/60">
        <Icon name="cart" size={17} />
        {totalItems} {totalItems === 1 ? "producto" : "productos"}
      </div>
    </div>

    {/* CARRITO VACÍO */}
    {!cartItems.length ? (
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl md:p-14">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#c89b3c]/20 bg-[#c89b3c]/10 text-[#d9b45c]">
          <Icon name="cart" size={44} />
        </div>

        <h3 className="mt-6 text-2xl font-black">
          Tu pedido está vacío
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/50">
          Elegí tus productos favoritos y seleccioná exactamente la cantidad
          que necesitás.
        </p>

        <button
          onClick={() => scrollTo("productos")}
          className="mt-7 rounded-xl bg-[#c89b3c] px-7 py-3.5 text-sm font-black text-[#071a33] shadow-lg transition hover:-translate-y-1 hover:bg-[#ddb65a]"
        >
          VER PRODUCTOS
        </button>
      </div>
    ) : (
      <>
        {/* PRODUCTOS DEL CARRITO */}
        <div className="mt-10 space-y-4">

          {cartItems.map((product) => {
            const quantity = cart[product.id] || 0;

            return (
              <div
                key={product.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-lg transition hover:border-[#c89b3c]/30 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  {/* PRODUCTO */}
                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#c89b3c]/10 text-[#d9b45c]">
                      {product.unit === "kg" ? (
                        <Icon name="fish" size={25} />
                      ) : (
                        <Icon name="can" size={25} />
                      )}
                    </div>

                    <div>
                      <h3 className="font-black text-white">
                        {product.name}
                      </h3>

                     <p className="mt-1 text-xs text-white/45">
  {getQuantityText(product)} ·{" "}
  {product.price === null
    ? "CONSULTAR PRECIO"
    : `${formatPrice(product.price)} por ${
        product.unit === "kg" ? "kg" : "unidad"
      }`}
</p> 
                    </div>

                  </div>

                  {/* CONTROLES */}
                  <div className="flex items-center justify-between gap-5 sm:justify-end">

                    <div className="text-right">
                      <p className="text-xl font-black text-[#e4bd5c]">
  {getSubtotal(product) === null
    ? "CONSULTAR PRECIO"
    : formatPrice(getSubtotal(product))}
</p>

                      <p className="text-[10px] uppercase tracking-wide text-white/30">
                        subtotal
                      </p>
                    </div>

                    <div className="flex items-center rounded-xl border border-white/10 bg-white/5 p-1">

                      <button
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`Quitar ${product.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        −
                      </button>

                      <span className="min-w-[90px] px-2 text-center text-xs font-black text-white">
                        {getQuantityText(product)}
                      </span>

                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={
                          product.unit === "kg"
                            ? quantity >= 10000
                            : quantity >= 10
                        }
                        aria-label={`Agregar ${product.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
                      >
                        +
                      </button>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* TOTAL */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#c89b3c]/30 bg-gradient-to-br from-[#c89b3c]/15 to-[#c89b3c]/5 shadow-xl">

          <div className="p-6 md:p-7">

            <div className="flex items-center justify-between gap-5">

              <div>
                <p className="text-sm font-bold text-white/50">
                  TOTAL DEL PEDIDO
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Calculado según las cantidades seleccionadas
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-black text-[#e4bd5c] md:text-4xl">
                  {formatPrice(total)}
                </p>
              </div>

            </div>

          </div>
        </div>
{/* AVISO PRECIO ORIENTATIVO */}
        <div className="mt-4 rounded-2xl border border-[#c89b3c]/30 bg-[#c89b3c]/10 px-5 py-4">
          <div className="flex items-start gap-3">

            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c89b3c]/15 text-[#e4bd5c]">
              !
            </div>

            <div>
              <p className="text-sm font-black text-[#e4bd5c]">
                Precio orientativo
              </p>

              <p className="mt-1 text-xs leading-5 text-white/50">
                El total indicado es estimativo. El importe final puede variar
                según el peso exacto del producto al momento del pesaje.
                En productos con precio a consultar, el valor será confirmado
                al preparar tu pedido.
              </p>
            </div>

          </div>
        </div>
        {/* CONTINUAR */}
        <button
          onClick={continueOrder}
          className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#c89b3c] px-6 py-5 text-base font-black text-[#071a33] shadow-xl transition hover:-translate-y-1 hover:bg-[#ddb65a]"
        >
          CONTINUAR CON EL PEDIDO
          <span className="text-xl">→</span>
        </button>

        <p className="mt-4 text-center text-xs text-white/30">
          En el siguiente paso vas a completar tus datos y elegir retiro,
          envío y forma de pago.
        </p>
      </>
    )}
  </div>
</section>

     {/* RECETAS */}
<section id="recetas" className="relative overflow-hidden bg-[#f8f5ed] px-5 py-20 md:px-8 md:py-24">
  <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#c89b3c]/15" />
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#071a33]/5" />

  <div className="relative mx-auto max-w-7xl">

    {/* ENCABEZADO */}
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#c89b3c]" />
        <span className="text-xs font-black tracking-[0.28em] text-[#9b731e]">
          IDEAS PARA TU MESA
        </span>
      </div>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] md:text-5xl lg:text-6xl">
        Recetas para disfrutar
        <span className="block text-[#b48725]">
          lo mejor del mar.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
        Inspirate con preparaciones simples, sabrosas y especiales para
        disfrutar nuestros pescados y mariscos en casa.
      </p>
    </div>

    {/* RECETAS */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {recipes.map((recipe) => (
        <article
          key={recipe.id}
          className="group overflow-hidden rounded-3xl border border-[#071a33]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          {/* ENCABEZADO DE RECETA */}
<div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#071a33]">
  <div className="absolute h-36 w-36 rounded-full border border-[#c89b3c]/20" />
  <div className="absolute h-24 w-24 rounded-full border border-[#c89b3c]/15" />

  <div className="relative z-10 text-center">
    <div className="text-4xl font-black text-[#c89b3c]/80">
      {String(recipe.id).padStart(2, "0")}
    </div>

    <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
      {recipe.category}
    </div>
  </div>
</div>

          {/* CONTENIDO */}
          <div className="p-6">

            <h3 className="text-xl font-black leading-tight text-[#071a33]">
              {recipe.title}
            </h3>

            <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
              {recipe.description}
            </p>

            <button
  onClick={() => setSelectedRecipe(recipe.id)}
  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#071a33]/10 bg-[#f8f5ed] px-4 py-3 text-xs font-black tracking-wide text-[#071a33] transition hover:border-[#c89b3c] hover:bg-[#c89b3c] hover:text-[#071a33]"
>
  VER RECETA
  <span className="text-base transition-transform group-hover:translate-x-1">
    →
  </span>
</button>

          </div>
        </article>
      ))}

    </div>

    {/* PIE DE SECCIÓN */}
    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#c89b3c]/20 bg-white/70 px-6 py-5 text-center shadow-sm sm:flex-row sm:text-left">
      <div>
        <p className="text-sm font-black text-[#071a33]">
          ¿Buscás una receta para un producto específico?
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Consultanos y te ayudamos a elegir la mejor preparación.
        </p>
      </div>

      <button
  onClick={() => {
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  }}
        className="shrink-0 rounded-xl bg-[#071a33] px-5 py-3 text-xs font-black text-white transition hover:bg-[#102d50]"
      >
        CONSULTAR POR WHATSAPP
      </button>
     </div>

    {/* VENTANA DE RECETA */}
    {selectedRecipe !== null &&
      (() => {
        const recipe = recipes.find((item) => item.id === selectedRecipe);

        if (!recipe) return null;

        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a33]/70 p-4 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#c89b3c]/30 bg-[#f8f5ed] shadow-2xl">

              {/* ENCABEZADO */}
              <div className="sticky top-0 z-10 border-b border-[#c89b3c]/20 bg-[#071a33] px-6 py-6 sm:px-8">
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xl text-white/80 transition hover:border-[#c89b3c] hover:bg-[#c89b3c] hover:text-[#071a33]"
                >
                  ×
                </button>

                <div className="pr-10">
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#e0b33f]">
                    {recipe.category}
                  </div>

                  <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-4xl">
                    {recipe.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#c89b3c]/30 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#e0b33f]">
                      ⏱ {recipe.time}
                    </span>

                    <span className="rounded-full border border-[#c89b3c]/30 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-[#e0b33f]">
                      ★ {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="px-6 py-7 sm:px-8 sm:py-8">

                <p className="text-base leading-7 text-slate-600">
                  {recipe.description}
                </p>

                <div className="mt-8 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">

                  {/* INGREDIENTES */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#c89b3c]" />
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#9b731e]">
                        Ingredientes
                      </h3>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c89b3c]" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PREPARACIÓN */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#c89b3c]" />
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#9b731e]">
                        Preparación
                      </h3>
                    </div>

                    <div className="mt-5 space-y-4">
                      {recipe.preparation.map((step, index) => (
                        <div
                          key={index}
                          className="flex gap-4"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#071a33] text-xs font-black text-[#e0b33f]">
                            {index + 1}
                          </div>

                          <p className="text-sm leading-6 text-slate-600">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* CERRAR */}
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="mt-9 w-full rounded-xl bg-[#071a33] px-5 py-3.5 text-xs font-black tracking-wide text-white transition hover:bg-[#102d50]"
                >
                  CERRAR RECETA
                </button>

              </div>
            </div>
          </div>
        );
      })()}

  </div>
</section>

      
      

     {/* ORDER FORM - VENTANA FLOTANTE */}
{showForm && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a33]/70 p-4 backdrop-blur-sm">
    <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#c89b3c]/30 bg-[#f8f5ed] shadow-2xl">

      {/* ENCABEZADO */}
      <div className="sticky top-0 z-10 border-b border-[#c89b3c]/20 bg-[#071a33] px-6 py-6 sm:px-8">

        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl text-white/80 transition hover:border-[#c89b3c] hover:bg-[#c89b3c] hover:text-[#071a33]"
        >
          ×
        </button>

        <div className="pr-12">
          <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#e0b33f]">
            ÚLTIMO PASO
          </div>

          <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-4xl">
            Datos del pedido
          </h2>

          <p className="mt-2 max-w-xl text-sm text-white/60">
            Completá tus datos y prepararemos tu pedido para enviarlo por WhatsApp.
          </p>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="px-6 py-7 sm:px-8 sm:py-8">

        {/* 01 · DATOS */}
        <div>
          <h3 className="text-xl font-black text-[#071a33]">
            01 · Tus datos
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#071a33]">
                Nombre y apellido *
              </span>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ej: Juan Pérez"
                className="w-full rounded-xl border border-[#071a33]/15 bg-white px-4 py-3.5 outline-none transition focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#071a33]">
                Teléfono *
              </span>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Ej: 2245 123456"
                className="w-full rounded-xl border border-[#071a33]/15 bg-white px-4 py-3.5 outline-none transition focus:border-[#c89b3c] focus:ring-2 focus:ring-[#c89b3c]/20"
              />
            </label>

          </div>
        </div>

        {/* 02 · ENTREGA */}
        <div className="mt-10 border-t border-[#071a33]/10 pt-9">

          <h3 className="text-xl font-black text-[#071a33]">
            02 · Entrega
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            {[
              ["retiro", "Retiro en el local", "Paso a buscar mi pedido.", "🏪"],
              ["domicilio", "Envío a domicilio", "Quiero recibirlo en mi domicilio.", "🚚"],
            ].map(([value, title, text, icon]) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setDelivery(value as "retiro" | "domicilio")
                }
                className={`rounded-2xl border-2 p-5 text-left transition ${
                  delivery === value
                    ? "border-[#c89b3c] bg-[#f3ead8]"
                    : "border-[#071a33]/10 bg-white hover:border-[#c89b3c]/50"
                }`}
              >
                <div className="text-2xl">{icon}</div>

                <div className="mt-3 font-black text-[#071a33]">
                  {title}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  {text}
                </div>
              </button>
            ))}

          </div>

          {delivery === "domicilio" && (
            <div className="mt-5 grid gap-5 md:grid-cols-2">

              <label>
                <span className="mb-2 block text-sm font-bold text-[#071a33]">
                  Domicilio *
                </span>

                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle y número"
                  className="w-full rounded-xl border border-[#071a33]/15 bg-white px-4 py-3.5 outline-none focus:border-[#c89b3c]"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-bold text-[#071a33]">
                  Localidad *
                </span>

                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ej: Dolores"
                  className="w-full rounded-xl border border-[#071a33]/15 bg-white px-4 py-3.5 outline-none focus:border-[#c89b3c]"
                />
              </label>

            </div>
          )}

        </div>

        {/* 03 · FORMA DE PAGO */}
        <div className="mt-10 border-t border-[#071a33]/10 pt-9">

          <h3 className="text-xl font-black text-[#071a33]">
            03 · Forma de pago
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {[
              ["efectivo", "💵 Efectivo"],
              ["transferencia", "🏦 Transferencia"],
              ["debito", "💳 Débito"],
              ["credito", "💳 Crédito"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setPayment(value as typeof payment)}
                className={`rounded-xl border-2 p-4 text-left text-sm font-black transition ${
                  payment === value
                    ? "border-[#c89b3c] bg-[#f3ead8] text-[#071a33]"
                    : "border-[#071a33]/10 bg-white hover:border-[#c89b3c]/50"
                }`}
              >
                {label}
              </button>
            ))}

          </div>

        </div>

        {/* 04 · OBSERVACIONES */}
        <div className="mt-10 border-t border-[#071a33]/10 pt-9">

          <h3 className="text-xl font-black text-[#071a33]">
            04 · Observaciones
          </h3>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="¿Querés agregar alguna indicación?"
            className="mt-5 w-full resize-none rounded-xl border border-[#071a33]/15 bg-white px-4 py-3.5 outline-none focus:border-[#c89b3c]"
          />

        </div>

        {/* RESUMEN */}
        <div className="mt-10 rounded-2xl bg-[#071a33] p-6 text-white">

          <div className="flex items-center justify-between gap-4">

            <h3 className="font-black">
              Resumen del pedido
            </h3>

            <span className="text-xl font-black text-[#e4bd5c]">
              {formatPrice(total)}
            </span>

          </div>

          <div className="mt-5 space-y-3 border-t border-white/10 pt-5">

            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex justify-between gap-4 text-sm"
              >
                <span className="text-white/70">
                  {product.name} · {getQuantityText(product)}
                </span>

                <span className="text-right font-bold">
                  {product.price === null
                    ? "CONSULTAR PRECIO"
                    : formatPrice(getSubtotal(product))}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* BOTONES */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">

          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="rounded-2xl border-2 border-[#071a33]/10 bg-white px-6 py-4 text-sm font-black text-[#071a33] transition hover:border-[#c89b3c]"
          >
            VOLVER AL CARRITO
          </button>

          <button
            type="button"
            onClick={sendOrderToWhatsApp}
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#168c4a] px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#11743d]"
          >
            <Icon name="phone" size={21} />
            ENVIAR POR WHATSAPP
          </button>

        </div>

      </div>
    </div>
  </div>
)}

      {/* CONTACTO */}
<section
  id="contacto"
  className="relative overflow-hidden bg-[#071a33] px-5 py-20 text-white md:px-8 md:py-24"
>
  {/* Detalles decorativos */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c89b3c]/15" />
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/5" />

  <div className="relative mx-auto max-w-7xl">

    {/* ENCABEZADO */}
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#c89b3c]" />

        <span className="text-xs font-black tracking-[0.28em] text-[#d9b45c]">
          CONTACTO
        </span>
      </div>

      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
        Estamos para ayudarte.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
        Consultanos por nuestros productos, disponibilidad, pedidos o envíos.
        Estamos para atenderte y ayudarte a elegir lo mejor del mar.
      </p>
    </div>

    {/* INFORMACIÓN */}
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {/* WHATSAPP */}
      <button
       onClick={() => {
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`;
}} 
        className="group rounded-3xl border border-[#c89b3c]/20 bg-white/[0.05] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/60 hover:bg-white/[0.08]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c89b3c] text-[#071a33]">
          <Icon name="phone" size={22} />
        </div>

        <div className="mt-5 text-xs font-black tracking-wider text-[#d9b45c]">
          WHATSAPP
        </div>

        <div className="mt-2 text-lg font-black">
          2245 478508
        </div>

        <div className="mt-2 text-xs text-white/45">
          Hacé tu pedido directamente
        </div>
      </button>

      {/* UBICACIÓN */}
      <button
       onClick={() => {
  window.location.href =
    "https://www.google.com/maps/search/?api=1&query=Belgrano+1219+Dolores+Buenos+Aires";
}} 
        className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/50 hover:bg-white/[0.08]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c89b3c]/15 text-[#d9b45c]">
          <span className="text-2xl">📍</span>
        </div>

        <div className="mt-5 text-xs font-black tracking-wider text-[#d9b45c]">
          ENCONTRANOS
        </div>

        <div className="mt-2 text-lg font-black">
          Belgrano 1219
        </div>

        <div className="mt-2 text-xs text-white/45">
          Dolores · Buenos Aires
        </div>
      </button>

      {/* HORARIOS */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c89b3c]/15 text-[#d9b45c]">
          <span className="text-2xl">🕐</span>
        </div>

        <div className="mt-5 text-xs font-black tracking-wider text-[#d9b45c]">
          HORARIOS
        </div>

        <div className="mt-2 text-sm font-bold leading-6 text-white/85">
          Martes a sábado
          <br />
          08:00 a 13:00
          <br />
          17:00 a 21:00
        </div>
      </div>

      {/* INSTAGRAM */}
      <button
       onClick={() => {
  window.location.href =
    "https://www.instagram.com/pescaderiadon_felipe/";
}} 
        className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/50 hover:bg-white/[0.08]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c89b3c]/15 text-[#d9b45c]">
          <Icon name="instagram" size={22} />
        </div>

        <div className="mt-5 text-xs font-black tracking-wider text-[#d9b45c]">
          INSTAGRAM
        </div>

        <div className="mt-2 text-lg font-black">
          @pescaderiadon_felipe
        </div>

        <div className="mt-2 text-xs text-white/45">
          Seguinos y conocé nuestras novedades
        </div>
      </button>

    </div>

    {/* LLAMADO A LA ACCIÓN */}
    <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#c89b3c]/25 bg-[#c89b3c]/10 p-6 text-center sm:flex-row sm:text-left md:p-8">

      <div>
        <div className="text-lg font-black">
          ¿Ya sabés qué querés llevar?
        </div>

        <p className="mt-1 text-sm text-white/50">
          Armá tu pedido desde el catálogo y envialo por WhatsApp.
        </p>
      </div>

      <button
        onClick={() => scrollTo("productos")}
        className="shrink-0 rounded-xl bg-[#c89b3c] px-6 py-3.5 text-sm font-black text-[#071a33] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ddb65a]"
      >
        VER PRODUCTOS →
      </button>

    </div>

  </div>
</section>
  {/* FOOTER */}
<footer className="relative overflow-hidden border-t border-[#c89b3c]/20 bg-[#061426] px-5 py-14 text-white md:px-8">

  {/* Detalles decorativos */}
  <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#c89b3c]/10" />
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/5" />

  <div className="relative mx-auto max-w-7xl">

    {/* BLOQUE PRINCIPAL */}
    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

      {/* MARCA */}
      <div>

        <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#c89b3c] bg-white shadow-lg">
  <img
    src="/logo-don-felipe.jpeg"
    alt="Pescadería Don Felipe"
    className="h-full w-full object-contain p-1"
  />
</div>  

          <div>
            <div className="text-[11px] font-bold tracking-[0.25em] text-[#d9b45c]">
              PESCADERÍA
            </div>

            <div className="text-2xl font-black tracking-wide">
              DON FELIPE
            </div>
          </div>

        </div>

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
          Pescados, mariscos, rebozados y conservas seleccionados para
          llevar la frescura y el sabor del mar a tu mesa.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/20 bg-[#c89b3c]/10 px-4 py-2 text-xs font-bold text-[#d9b45c]">
          <span className="h-2 w-2 rounded-full bg-[#c89b3c]" />
          FRESCURA · CALIDAD · CONFIANZA
        </div>

      </div>


      {/* NAVEGACIÓN */}
      <div>

        <div className="text-xs font-black tracking-[0.2em] text-[#d9b45c]">
          NAVEGACIÓN
        </div>

        <div className="mt-5 grid gap-3">

          <button
            onClick={() => scrollTo("inicio")}
            className="text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
          >
            Inicio
          </button>

          <button
            onClick={() => scrollTo("productos")}
            className="text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
          >
            Productos
          </button>

          <button
            onClick={() => scrollTo("carrito")}
            className="text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
          >
            Mi pedido
          </button>

          <button
            onClick={() => scrollTo("recetas")}
            className="text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
          >
            Recetas
          </button>

          <button
            onClick={() => scrollTo("contacto")}
            className="text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
          >
            Contacto
          </button>

        </div>

      </div>

{/* CONTACTO */}
<div>

  <div className="text-xs font-black tracking-[0.2em] text-[#d9b45c]">
    CONTACTO
  </div>

  <div className="mt-5 space-y-4">

    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className="flex items-start gap-3 text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
    >
      <Icon name="phone" size={18} />

      <span>
        2245 478508
        <span className="mt-1 block text-xs text-white/30">
          WhatsApp
        </span>
      </span>
    </a>

    <a
      href="https://www.google.com/maps/search/?api=1&query=Belgrano+1219+Dolores+Buenos+Aires"
      className="flex items-start gap-3 text-left text-sm text-white/55 transition hover:text-[#d9b45c]"
    >
      <Icon name="pin" size={18} />

      <span>
        {STORE_ADDRESS}
        <span className="mt-1 block text-xs text-white/30">
          Dolores · Buenos Aires
        </span>
      </span>
    </a>

  </div>

</div>

      {/* HORARIOS */}
      <div>

        <div className="text-xs font-black tracking-[0.2em] text-[#d9b45c]">
          HORARIOS
        </div>

        <div className="mt-5 flex items-start gap-3 text-sm text-white/55">

          <Icon name="clock" size={18} />

          <span className="leading-7">
            Martes a sábado
            <br />
            08:00 a 13:00
            <br />
            17:00 a 21:00
          </span>

        </div>

        <div className="mt-5 rounded-2xl border border-[#c89b3c]/15 bg-[#c89b3c]/5 p-4">

          <div className="flex items-center gap-2 text-xs font-bold text-[#d9b45c]">
            <Icon name="check" size={15} />
            PEDIDOS PERSONALIZADOS
          </div>

          <p className="mt-2 text-xs leading-5 text-white/35">
            Elegí tus productos, indicá la cantidad y enviá tu pedido por
            WhatsApp.
          </p>

        </div>

      </div>

    </div>


    {/* SEPARADOR */}
    <div className="my-10 h-px bg-white/10" />


    {/* PARTE INFERIOR */}
    <div className="flex flex-col gap-5 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

      <div>
        © {new Date().getFullYear()} Pescadería Don Felipe
        <span className="mx-2 text-[#c89b3c]/50">·</span>
        Dolores, Buenos Aires
      </div>

      <div className="flex flex-wrap gap-5">

        <button
          onClick={() => scrollTo("productos")}
          className="transition hover:text-[#d9b45c]"
        >
          Productos
        </button>

        <button
          onClick={() => scrollTo("recetas")}
          className="transition hover:text-[#d9b45c]"
        >
          Recetas
        </button>

        <button
          onClick={() => scrollTo("contacto")}
          className="transition hover:text-[#d9b45c]"
        >
          Contacto
        </button>

      </div>

    </div>

  </div>
</footer>    
    </main>
  );
}