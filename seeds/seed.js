const currentProducts = [
    {
        img: "https://shop-stellajean.com/media/catalog/product/cache/5f6b5058bc423d85b921c37eb1911be9/s/s/ss24sja706rspo004_1_4.jpg",
        name: "Colibri Dress",
        price: 600,
        description: "Bicolored striped cotton poplin fabric. Embroidered patches in colibrì motif with macramé effect, bralette with elasticated back center. Adjustable straps, side pockets, and spiral zipper in matching color on the side. ",
        size: "Medium",
        brand: "Stella Jean",
        condition: "New",
        category:"Dress",
        gender:"Women"

    },
    
    {
        img: "https://cdn-images.farfetch-contents.com/off-white-red-sierraleone-mini-dress_24376777_55553878_1000.jpg?c=3",
        name: "Red Sierraleone Mini Dress",
        price: 900,
        description: "This sleeveless mini dress features a high neck and layered hem with contrasting striped edging. Made in Italy.",
        size: "Small",
        brand: "Off-White",
        condition: "Like New",
        category:"Dress",
        gender:"Women"
        

    },
    {
        img: "https://dailypaperclothing.com/cdn/shop/files/SIA_TOP_VINTAGE_INDIGO_BLUE_Front.jpg?v=1718633072",
        name: "Country Blue Sia Top",
        price: 95,
        description: "Our Sia top has a fitted silhouette with hidden snap buttons, a classic shirt collar and back yoke",
        size: "Large",
        brand: "Daily Paper",
        condition: "New",
        category:"Top",
        gender:"Women"
        

    },
    {
        img: "https://dailypaperclothing.com/cdn/shop/files/MACRAMEAMBAJEANS_GREY_Front.jpg?v=1736936016",
        name: "Grey Macrame Amba Jeans",
        price: 200,
        description: "Our grey macrame denim pants are made from a custom jacquard fabric with all-over macrame pattern, pockets across front and back and a faux leather patch at the back of the waistband. The long straight-legged pants come with a zip-and-button closure.",
        size: "Large",
        brand: "Daily Paper",
        condition: "Like New",
        category:"Bottom",
        gender:"Men"
        

    },
    {
        img: "https://fenoel.com/cdn/shop/files/FENOEL_SPRING23_LOOK_13_0801copy_352b23c3-1ecc-43cc-87db-844b3a77f7c8_1024x1024.jpg?v=1684604175",
        name: "Flon Fleur Puff Sleeve Top",
        price: 930,
        description: "Beauty is blooming in the Flon Fleur Puff Sleeve Top. Crafted from recycled embroidered mesh, this top channels femininity and sensuality with its puff sleeve design. Showcase your inner goddess with this eco-friendly piece.",
        size: "Large",
        brand: "Reception by Fe Noel",
        condition: "New",
        category:"Top",
        gender:"Women"
        

    },
    {
        img: "https://laquansmith.com/cdn/shop/files/FW23-Catsuits.jpg?crop=center&height=1350&v=1698352263&width=900",
        name: "Keyhold Suede Jumpsuit",
        price: 1900,
        description: "sCrafted of lamb suede, LaQuan Smith's jumpsuit spotlights a daring keyhole cut-out bodice and zip accents at the arms and legs for versatile styling.",
        size: "Small",
        brand: "Laquan Smith",
        condition: "New",
        category:"Jumpsuit",
        gender:"Women"
        

    },
    {
        img: "https://i.ebayimg.com/images/g/ilcAAOSwYqlnR1-T/s-l1600.webp",
        name: "Laquan Smith's Lace Orange Pants",
        price: 450,
        description: "Item worn once and dry cleaned",
        size: "Medium",
        brand: "Laquan Smith",
        condition: "Like New",
        category:"Bottom",
        gender:"Women"
        

    },
    {
        img: "https://images.squarespace-cdn.com/content/v1/6169c88e4d8ab0099aaf6e31/1697817849228-JNEN1M3AGQWCO6S0HAEH/R04088313_PURPLE_ALT01.jpg?format=1000w",
        name: "Purple Stretch Silk Shirt",
        price: 400,
        description: "Elevate your wardrobe with our Premium Crepe Silk Shirt, featuring concealed buttons for a sleek, refined appearance. Designed with Ozwald Boateng's signature purple trims adorning the collar and hem, this shirt embodies elegance and attention to detail. Make a statement with this premium addition to your collection.",
        size: "Large",
        brand: "Ozwald Boateng",
        condition: "New",
        category:"Top",
        gender:"Men"
        

    },
    {
        img: "https://i.ebayimg.com/images/g/rlMAAOSwN7pnl12f/s-l1600.webp",
        name: "ESSENTIALS FEAR OF GOD TRACKSUIT SWEATSUIT ",
        price: 130,
        description: "Worn less than 3 times. TRACKHOODIE TWO PIECE SET",
        size: "X-Large",
        brand: "Fear of God",
        condition: "Very Good",
        category:"Matching Set",
        gender:"Men"
        

    },
    {
        img: "https://www.undracelesteny.com/cdn/shop/products/R2-S13-627-SKT_RichBerryAnimal_02_1296x.jpg?v=1676663867",
        name: "Long Bias Cut Skirt",
        price: 100,
        description: "The Bias Cut Tiered Skirt moves like a dream",
        size: "Small",
        brand: "Undra Celeste",
        condition: "New",
        category:"Bottom",
        gender:"Women"
        

    },
    {
        img: "https://www.andreaiyamah.com/cdn/shop/files/ANDREAIYAMAH-FALLWINTER23-ECOMMERCE-SOMBRADUSTBODYSUIT_SITACORSETDUSTPANTS-RTW-ONFIGURE-FRONT_JPG_893e4a0f-1500-4657-81e5-161756d3c94d.jpg?v=1719411615&width=1200",
        name: "Sombra Bodysuit - Dust",
        price: 220,
        description: "The SOMBRA thong bodysuit is a sculptural masterpiece and is back in a unique sand hue. Playing on the delicate nature of organza and the textural appeal of pleats, this style was inspired by the unique patterns and proportions of mushroom caps. The SOMBRA leotard features an inner knit leotard layer with a convenient snap closure.",
        size: "Medium",
        brand: "Andrea Iyamah",
        condition: "New",
        category:"Top",
        gender:"Women"
        

    },
    {
        img: "https://www.andreaiyamah.com/cdn/shop/files/ANDREAIYAMAH-SS24-ECOMMERCE-REBACUTOUTTOP_REBAHIGHRISEPANTS-RTW-TOP_PANTS-ONFIGURE-FRONT_JPG_87410fe2-4137-4d19-97ed-c1a1b8781f2c.jpg?v=1709752143&width=1200",
        name: "Reba Top - Pearl Purple",
        price: 200,
        description: "With its alluring open back, the REBA CUT-OUT top exudes confidence and intrigue. The carefully designed cut-out detail showcases just the right amount of skin, striking the perfect balance between sophistication and sensuality. The open back adds an unexpected element, ensuring you make a lasting impression from every angle. ",
        size: "X-Large",
        brand: "Andrea Iyamah",
        condition: "New",
        category:"Top",
        gender:"Women"
        

    },
   
    
  
]

module.exports = currentProducts