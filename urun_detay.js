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
            description: 'Akdeniz bölgesinde doğal olarak yetişen keçiboynuzu bitkisinden elde edilen bu öz, soğuk ekstraksiyon yöntemi ile hazırlanmıştır. Katkı maddesi içermez.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 2,
            name: 'UPEK Andız Özü - 250 ml',
            image: 'görseller/andız.png',
            description: 'Doğal andız bitkisinden elde edilen bu öz, vitamin ve mineral bakımından zengin, sağlık dostu bir üründür.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 3,
            name: 'UPEK Harnup (Keçiboynuzu) Özü - Tahinli 330 gr',
            image: 'görseller/tahinli.png',
            description: 'Harnup ve tahin birleşiminden oluşan bu ürün, kahvaltılara eşsiz bir lezzet katar.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 4,
            name: 'UPEK Harnup (Keçiboynuzu) Özü - 250 ml',
            image: 'görseller/500 ml.png',
            description: 'Keçiboynuzu bitkisinin özünden elde edilmiş, tamamen doğal bir üründür.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 5,
            name: 'Greyfurt Suyu Konsantresi',
            image: 'görseller/greyfurt.png',
            description: 'Taze greyfurtlardan elde edilen bu konsantre, zengin aroması ve yüksek vitamin içeriği ile içecek ve gıda üretiminde ideal bir seçimdir. Ürünümüz %58-62 Brix değerine sahiptir ve -18°C’de saklanmalıdır. Endüstriyel müşterilerimizin ihtiyaçlarına göre özenle hazırlanmıştır.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 6,
            name: 'Limon Suyu Konsantresi',
            image: 'görseller/limon.png',
            description: 'Limon suyu konsantresi, taze limonların yoğunlaştırılmasıyla elde edilir. Zengin C vitamini içeriği ve güçlü asidik yapısı sayesinde içecek ve gıda endüstrisinde geniş kullanım alanına sahiptir. Ürün %48-52 Brix değerine sahiptir ve -18°C’de muhafaza edilmelidir. Endüstriyel müşteriler için özenle üretilmiştir.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 7,
            name: 'Portakal Suyu Konsantresi',
            image: 'görseller/portakalvaril.png',
            description: 'Taze portakallardan elde edilen bu konsantre, doğal tatlılığı ve zengin vitamin içeriği ile dikkat çeker. İçeriğinde %65-68 Brix değerine sahiptir ve -18°C’de saklanması önerilir. İçecek üretiminde ve tatlandırıcı olarak ideal bir tercihtir.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 8,
            name: 'Nar Suyu Konsantresi',
            image: 'görseller/nar.png',
            description: 'Taze narların konsantre edilmesiyle elde edilen nar suyu konsantresi, antioksidan özellikleri ve zengin aroması ile öne çıkar. %60-65 Brix değerine sahip olan bu ürün, içecek ve tatlı üretiminde yaygın olarak kullanılır. Ürün, -18°C’de saklanmalı ve endüstriyel standartlara uygun şekilde taşınmalıdır.',
            price: 'Fiyat teklifi alın'
        },
        {
            id: 9,
            name: 'Keçiboynuzu Gamı',
            image: 'görseller/gam.png',
            description: 'Keçiboynuzu gamı, doğal bir kıvam artırıcı ve stabilizatör olarak gıda endüstrisinde yaygın şekilde kullanılan bir üründür. Ekmekçilik, dondurma, şekerleme ve süt ürünlerinde kullanılabilir. Ürün, %100 doğal keçiboynuzu çekirdeklerinden elde edilmiştir. Saklama koşulları: Serin, kuru bir yerde muhafaza edilmelidir. Nemden koruyunuz. Endüstriyel standartlara uygun olarak hazırlanmıştır.',
            price: 'Fiyat teklifi alın'
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