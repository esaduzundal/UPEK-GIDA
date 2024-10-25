// urun_detay.js
document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // ID'nin alınıp alınmadığını kontrol edelim
    console.log('Alınan ID:', productId);

    const products = [
        {
            id: 1,
            name: 'UPEK Harnup (Keçiboynuzu) Özü - 500 ml',
            image: 'görseller/500 ml.png',
            description: 'Akdeniz bölgesinde doğal olarak yetişen keçiboynuzu bitkisinin doğru türleri seçilerek meyvelerin vitamin, mineral ve diğer bileşenlerinin değişikliğe uğramaması için sırasıyla soğuk ekstraksiyon, pastörizasyon ve vakum altında düşük sıcaklıkta evaporasyon işlemi uygulanarak elde edilmiştir. İçindekiler: %100 doğal harnup meyvesidir. Koruyucu ve katkı maddesi içermez.'
        },
        {
            id: 2,
            name: 'UPEK Andız Özü - 250 ml',
            image: 'görseller/andız.png',
            description: 'Doğal olarak yetişen andız bitkisinden elde edilen öz, çeşitli sağlık faydalarıyla bilinir. Soğuk sıkım yöntemiyle elde edilen bu öz, vitamin ve mineral bakımından zengindir.'
        },
        {
            id: 3,
            name: 'UPEK Harnup (Keçiboynuzu) Özü - Tahinli 330 gr',
            image: 'görseller/tahinli.png',
            description: 'Harnup ve tahinin muhteşem birleşimi ile elde edilen bu ürün, zengin besin değerleri ve eşsiz lezzeti ile sofralarınızı şenlendirir.'
        },
        {
            id: 4,
            name: 'UPEK Harnup (Keçiboynuzu) Özü - 250 ml',
            image: 'görseller/500 ml.png',
            description: 'Akdeniz bölgesinde doğal olarak yetişen keçiboynuzu bitkisinin özü, çeşitli sağlık faydaları sunar. Doğal ve katkısızdır.'
        },
        {
            id: 5,
            name: 'Greyfurt Suyu Konsantresi',
            price: 'Fiyat teklifi alın',
            image: 'görseller/greyfurt.webp',
            description: 'Taze greyfurtlardan elde edilen bu konsantre, yoğun aroması ve zengin vitamin içeriği ile dikkat çeker.'
        },
        {
            id: 6,
            name: 'Limon Suyu Konsantresi',
            price: 'Fiyat teklifi alın',
            image: 'görseller/limon.jpg',
            description: 'Taze limonlardan elde edilen bu konsantre, yemekleriniz ve içecekleriniz için ideal bir lezzet kaynağıdır.'
        },
        {
            id: 7,
            name: 'Portakal Suyu Konsantresi',
            price: 'Fiyat teklifi alın',
            image: 'görseller/portakal.png',
            description: 'Portakalın doğal tadını ve vitaminlerini sunan bu konsantre, içeceklerinizde ve tariflerinizde kullanmak için mükemmeldir.'
        },
        {
            id: 8,
            name: 'Nar Suyu Konsantresi',
            price: 'Fiyat teklifi alın',
            image: 'görseller/nar.jpg',
            description: 'Taze narların konsantre edilmesiyle elde edilen bu ürün, güçlü antioksidan özellikleri ve eşsiz lezzeti ile bilinir.'
        }
    ];

    const product = products.find(p => p.id == productId);

    if (product) {
        productDetailContainer.innerHTML = `
            <div class="product-details">
                <img src="${product.image}" alt="${product.name}">
                <h1>${product.name}</h1>
                ${product.price ? `<p class="product-price">${product.price}</p>` : ''}
                <p class="product-description">${product.description}</p>
                <a href="urunlerimiz.html" class="back-to-products">Ürünlere Geri Dön</a>
            </div>
        `;
    } else {
        productDetailContainer.innerHTML = '<p>Ürün bulunamadı.</p>';
    }
});