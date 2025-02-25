import {
	CountryNames
} from '~types/countries';

const femaleNames = ['Aynur', 'Aysel', 'Ayşe', 'Ayşegül', 'Ayşen', 'Ayşenaz', 'Ayşenur', 'Başak', 'Beyza', 'Buket',
    'Büşra', 'Canan', 'Candan', 'Cansel', 'Cansu', 'Ceren', 'Ceylan', 'Defne', 'Dilek', 'Ebru', 'Eda', 'Elif',
    'Elmas', 'Emine', 'Esra', 'Fadime', 'Fi̇li̇z', 'Gökçe', 'Gül', 'Gülay', 'Gülbahar', 'Gülcan', 'Güler', 'Güllü',
    'Gülseren', 'Gülsüm', 'Gülten', 'Gülşen', 'Hacer', 'Hanife', 'Hatice', 'Havva', 'Hülya', 'İlknur', 'Kardelen',
    'Kübra', 'Lale', 'Leyla', 'Manolya', 'Melek', 'Melike', 'Meli̇sa', 'Menekşe', 'Meral', 'Merve', 'Meryem',
    'Müge', 'Naz', 'Nazan', 'Nazar', 'Nazi̇fe', 'Nazi̇k', 'Nazi̇me', 'Nazi̇re', 'Nazli', 'Nazlican', 'Nazmi̇ye',
    'Nida', 'Nisa', 'Nur', 'Nuran', 'Nuray', 'Nurcan', 'Nurdan', 'Nurgül', 'Nurhan', 'Nuriye', 'Nursel', 'Nurten',
    'Rabia', 'Semra', 'Sevim', 'Sevi̇', 'Sevi̇lay', 'Sevi̇m', 'Sevi̇n', 'Sevi̇nç', 'Songül', 'Su', 'Sude',
    'Sudenaz', 'Sudenur', 'Sultan', 'Suna', 'Sunay', 'Suzan', 'Sümeyra', 'Tuğba', 'Yasemin', 'Zehra', 'Zeynep',
    'Çağla', 'Çiçek', 'Özlem', 'Ümmü', 'Ümmügülsüm', 'Şenay', 'Şenel', 'Şengül', 'Şeni̇z', 'Şennur', 'Şerife',
    'Fatma'
];

const maleNames = ['Abdullah', 'Abuzer', 'Adem', 'Ahmet', 'Ali̇', 'Ali̇can', 'Ali̇han', 'Ali̇m', 'Ali̇şan', 'Alp',
    'Alparslan', 'Alpay', 'Alpcan', 'Alper', 'Alperen', 'Alphan', 'Alpteki̇n', 'Alptuğ', 'Ata', 'Ataberk', 'Atabey',
    'Atacan', 'Atahan', 'Atakan', 'Atalay', 'Ataman', 'Atay', 'Azi̇z', 'Bedirhan', 'Berk', 'Berkan', 'Berkant',
    'Berkay', 'Berkcan', 'Berke', 'Berkehan', 'Berker', 'Berki̇n', 'Burak', 'Can', 'Canberk', 'Caner', 'Cankat',
    'Cem', 'Cemal', 'Cemaletti̇n', 'Cemali̇', 'Cemi̇l', 'Cemre', 'Efe', 'Emirhan', 'Emi̇n', 'Emre', 'Enes', 'Ercan',
    'Eren', 'Ergun', 'Fati̇h', 'Furkan', 'Gürsel', 'Hakan', 'Hali̇l', 'Hami̇t', 'Hasan', 'Hüseyi̇n', 'İbrahi̇m',
    'İhsan', 'İsmai̇L', 'İsmai̇l', 'Kadi̇r', 'Kemal', 'Keri̇m', 'Kubilay', 'Mahmut', 'Mehmet', 'Menderes',
    'Mert', 'Murat', 'Mustafa', 'Nur', 'Nureddi̇n', 'Nuretti̇n', 'Nuri̇', 'Nurullah', 'Olcay', 'Osman', 'Poyraz',
    'Ramazan', 'Recep', 'Rıza', 'Sali̇h', 'Samet', 'Serhat', 'Serkan', 'Sonat', 'Süleyman', 'Tayfun', 'Temel',
    'Volkan', 'Yusuf', 'Ömer', 'Şahi̇n', 'Mehmet'
];

const lastNames = ['Acar', 'Adıgüzel', 'Ak', 'Akar', 'Akay', 'Akbaş', 'Akbulut', 'Akdağ', 'Akdemir', 'Akdeniz',
    'Akdoğan', 'Akgül', 'Akgün', 'Akkaya', 'Akkuş', 'Akman', 'Akpınar', 'Aksoy', 'Aksu', 'Aktaş', 'Akyol', 'Akyüz',
    'Akça', 'Akçay', 'Akın', 'Albayrak', 'Alkan', 'Altay', 'Altun', 'Altuntaş', 'Altın', 'Altıntaş', 'Aras',
    'Arslan', 'Arı', 'Arıkan', 'Aslan', 'Atalay', 'Ataş', 'Ateş', 'Atmaca', 'Avcı', 'Ay', 'Ayaz', 'Aydemir',
    'Aydoğan', 'Aydoğdu', 'Aydın', 'Aygün', 'Ayhan', 'Açıkgöz', 'Bakır', 'Bal', 'Balcı', 'Baran', 'Bayrak',
    'Bayraktar', 'Bayram', 'Baş', 'Başaran', 'Bektaş', 'Bilgin', 'Bingöl', 'Biçer', 'Bolat', 'Boz', 'Bozkurt',
    'Budak', 'Bulut', 'Bülbül', 'Can', 'Cengiz', 'Ceylan', 'Coşkun', 'Dağ', 'Demir', 'Demirbaş', 'Demircan',
    'Demirci', 'Demirel', 'Demirtaş', 'Deniz', 'Dinç', 'Dinçer', 'Doğan', 'Doğru', 'Duman', 'Durak', 'Duran',
    'Durmaz', 'Durmuş', 'Dursun', 'Dönmez', 'Dündar', 'Efe', 'Eker', 'Ekici', 'Ekinci', 'Er', 'Ercan', 'Erdem',
    'Erdoğan', 'Eren', 'Ergin', 'Ergün', 'Erkan', 'Erol', 'Eroğlu', 'Ersoy', 'Ertaş', 'Ertürk', 'Esen', 'Eser',
    'Fidan', 'Fırat', 'Gedik', 'Genç', 'Gezer', 'Gök', 'Göktaş', 'Gökçe', 'Gül', 'Güler', 'Güleç', 'Gültekin',
    'Gümüş', 'Gün', 'Günay', 'Gündoğdu', 'Gündüz', 'Güner', 'Güney', 'Güneş', 'Güngör', 'Gür', 'Gürbüz', 'Gürsoy',
    'Güven', 'Güzel', 'Güçlü', 'Işık', 'Kahraman', 'Kalkan', 'Kandemir', 'Kaplan', 'Kara', 'Karabulut', 'Karaca',
    'Karadağ', 'Karadeniz', 'Karagöz', 'Karahan', 'Karakaya', 'Karakaş', 'Karakoç', 'Karakuş', 'Karaman', 'Karataş',
    'Kartal', 'Kaya', 'Kaçar', 'Keleş', 'Keskin', 'Koca', 'Korkmaz', 'Koyuncu', 'Koç', 'Koçak', 'Kurt', 'Kuru',
    'Kutlu', 'Kuş', 'Köksal', 'Köse', 'Küçük', 'Kılınç', 'Kılıç', 'Mert', 'Metin', 'Mutlu', 'Oral', 'Orhan', 'Oruç',
    'Oğuz', 'Parlak', 'Pehlivan', 'Polat', 'Sarı', 'Sarıkaya', 'Savaş', 'Sağlam', 'Sert', 'Sevim', 'Sevinç',
    'Sezer', 'Sezgin', 'Soylu', 'Sönmez', 'Tan', 'Taş', 'Taşdemir', 'Taşkın', 'Taşçi', 'Tekin', 'Temel', 'Topal',
    'Toprak', 'Topçu', 'Torun', 'Tosun', 'Tuna', 'Tuncer', 'Tunç', 'Turan', 'Turgut', 'Turhan', 'Türk', 'Türkmen',
    'Türkoğlu', 'Uslu', 'Usta', 'Uyar', 'Uysal', 'Uzun', 'Uçar', 'Uğur', 'Uğurlu', 'Varol', 'Vural', 'Yalçın',
    'Yalçınkaya', 'Yaman', 'Yavuz', 'Yazici', 'Yaşar', 'Yeşil', 'Yiğit', 'Yüce', 'Yücel', 'Yüksel', 'Yıldırım',
    'Yıldız', 'Zengin', 'Çakar', 'Çakmak', 'Çakır', 'Çalışkan', 'Çam', 'Çağlar', 'Çelebi', 'Çelik', 'Çetin',
    'Çetinkaya', 'Çevik', 'Çiftçi', 'Çimen', 'Çiçek', 'Çoban', 'Çolak', 'Çınar', 'Öksüz', 'Ölmez', 'Önal', 'Önder',
    'Öner', 'Öz', 'Özbek', 'Özcan', 'Özdemir', 'Özden', 'Özel', 'Özen', 'Özer', 'Özkan', 'Özkaya', 'Özmen',
    'Öztürk', 'Özçelik', 'Ünal', 'Ünlü', 'Ünsal', 'İlhan', 'İnan', 'İnce', 'İpek', 'Şahin', 'Şanli', 'Şeker', 'Şen',
    'Şener', 'Şengül', 'Şenol', 'Şentürk', 'Şimşek', 'Yılmaz'
];

const namesData: CountryNames = {
    femaleNames,
    maleNames,
    lastNames,
};

export default namesData;