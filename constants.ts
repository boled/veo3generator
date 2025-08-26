/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {Video} from './types';

/** Base URL for static files. */
const staticFilesUrl =
  'https://www.gstatic.com/aistudio/starter-apps/veo3-gallery/';

/** Videos for the gallery. */
export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    title: "Stop Motion: Bencana Kuliner Karakter Berbulu",
    videoUrl:
      staticFilesUrl + 'Stop_Motion_Fluffy_Characters__Culinary_Disaster.mp4',
    description: `Stop Motion Karakter Berbulu: Di dalam dapur yang nyaman dan berwarna-warni terbuat dari kain flanel dan benang. Profesor Nibbles, seekor hamster gemuk berbulu dengan kacamata kebesaran, dengan gugup mengaduk panci yang bergelembung di atas kompor mini, sambil bergumam, "Sedikit lagi... 'esens gurih,' seperti yang tertulis di resep." Kamera mengambil gambar dari jarak menengah, menangkap adukannya yang panik. Tiba-tiba, panci mengeluarkan suara "POP!" keras diikuti oleh suara "wusss" yang lucu, dan semburan lendir hijau warna-warni meletus, menutupi seluruh dapur. Profesor Nibbles menjerit, "Oh, tidak! Terjadi lagi!" dan bergegas pergi, meninggalkan jejak pekikan kecil yang panik.`,
  },
  {
    id: '2',
    title: "Claymation: Krisis Eksistensial Robot",
    videoUrl: staticFilesUrl + 'Claymation_Robot_s_Existential_Crisis.mp4',
    description: `Claymation (Stop Motion): Di sebuah bengkel garasi yang unik dan berantakan, sebuah gambar lebar memperlihatkan robot tanah liat yang dibuat dengan kasar dengan bagian-bagian yang tidak serasi, menatap sedih pada kunci pas yang rusak. Kamera perlahan-lahan memperbesar wajahnya, yang menunjukkan ekspresi cemberut yang lucu. Sebuah suara robotik dan monoton keluar darinya, "Unit 734 melaporkan... tujuan tidak terdefinisi. Kunci pas... tidak berfungsi." Terdengar suara putaran roda gigi internal, diikuti oleh suara "bup-bip" yang sedih. Seorang penemu manusia eksentrik dengan rambut liar dari benang masuk ke dalam bingkai, melihat robot itu, dan dengan riang berseru, "Omong kosong, 734! Tujuanmu adalah mengambilkan kopiku!" Mata robot itu perlahan melebar saat merespons, "Kopi... perintah baru terdeteksi. Memindai sumber kafein terdekat."`,
  },
  {
    id: '3',
    title: 'Sinematik Abstrak: Detak Jantung Mekanis',
    videoUrl:
      staticFilesUrl + 'Abstract_Cinematic_The_Mechanical_Heartbeat.mp4',
    description: `Urutan dimulai dengan close-up ekstrem pada sebuah roda gigi tunggal, perlahan berputar dan memantulkan sinar matahari yang terik. Kamera secara bertahap mundur dalam gerakan berkelanjutan, mengungkapkan bahwa ini hanyalah satu komponen dari jantung mekanis raksasa yang setengah terkubur di gurun pasir berwarna karat yang sunyi. Sebuah gambar udara yang luas menunjukkan skala besarnya dan keterasingannya di lanskap tandus. Kamera turun untuk menangkap pipa-pipa yang mendesiskan uap dan dentuman berirama yang bergema di dataran kosong. Efek guncangan halus disinkronkan dengan setiap detak jantung raksasa. Sebuah gambar pelacakan lateral menemukan sosok-sosok kecil berjubah bergegas di permukaan logam. Kamera mengikuti salah satu sosok tersebut dalam gambar pelacakan terperinci saat mereka melakukan perawatan yang teliti, memoles katup kuningan dan mengencangkan baut-baut besar. Gerakan kompleks mengelilingi seluruh struktur, menangkap tim pemeliharaan yang berbeda bekerja di posisi berbahaya di seluruh eksteriornya yang berkarat. Gambar terakhir dimulai dengan fokus pada pekerjaan teliti satu sosok kecil sebelum melakukan penarikan dramatis yang mengungkapkan skala sebenarnya dari jantung dan ukuran mungil para perawatnya, merawat organ vital dari raksasa tak terlihat yang tertidur yang melampaui bingkai.`,
  },
  {
    id: '4',
    title: 'Percakapan Intens Karakter',
    videoUrl: staticFilesUrl + 'Characters_intense_talking.mp4',
    description: `Keheningan yang tegang memenuhi sebuah restoran mewah yang remang-remang di mana seorang wanita yang tenang dan seorang pria yang lelah duduk berhadapan. Dia perlahan menyesap anggur, lalu berkata, "Kita berdua tahu mengapa kita di sini, David. Saatnya untuk jujur," sementara obrolan samar terdengar di kejauhan. Dia mendesah, pandangannya berkedip sebelum bertemu dengannya saat dia menjawab, "Kejujuran? Setelah sekian lama, Sarah, apa yang tersisa darinya?" Ketegangan yang nyata menggantung, hanya dipecahkan oleh dengungan pendingin udara yang halus, saat matanya yang tak berkedip menatapnya.`,
  },
  {
    id: '5',
    title: "Penampilan Langsung: Balada Penyanyi Penuh Perasaan",
    videoUrl: staticFilesUrl + 'Live_Performance_Soulful_Singer_s_Ballad.mp4',
    description: `Sebuah Gambar Pelacakan Sudut Rendah yang dramatis perlahan mundur dari seorang vokalis Kulit Hitam, bermandikan cahaya panggung yang hangat dan intim di sebuah klub jazz berasap di malam hari. Mata mereka terpejam dalam fokus yang tenang saat mereka menyanyikan nada yang kuat dan membangkitkan semangat, mikrofon dipegang erat. Kamera mundur, memberi mereka ruang untuk mengisi bingkai dengan suara mereka. "Biarkan irama mengangkat jiwamu... bebaskan!" Garis bass yang lembut dan resonan serta akord piano yang lembut memberikan latar belakang yang harmonis, diselingi oleh denting gelas yang samar dan tepuk tangan pelan dari penonton.`,
  },
  {
    id: '6',
    title: 'Monyet di Alam',
    videoUrl: staticFilesUrl + 'Nature_Monkeys.mp4',
    description: `Close-up lembut pada dua monyet makaka coklat kecil yang bertengger di cabang yang tertutup lumut di hutan hujan yang cerah dan berkabut. Satu monyet dengan lembut merawat bulu monyet lainnya, membuat suara "berkicau" dan "mendengkur" yang lembut. Kamera perlahan memperbesar lebih jauh saat mereka saling berdekatan dan menatap satu sama lain, diikuti oleh suara "kuu" yang lembut dan puas dari salah satunya. Latar belakangnya adalah permadani lembut dan buram dari dedaunan hijau subur dan kabut tipis. Suara sekitar hutan hujan, termasuk panggilan burung di kejauhan, kicauan serangga, dan tetesan air yang lembut, hadir secara halus.`,
  },
  {
    id: '7',
    title: 'Trailer Video Game: Pengejaran di Kota Sci-Fi',
    videoUrl: staticFilesUrl + 'Video_Game_Trailer_Sci_Fi_Urban_Chasemp4.mp4',
    description: `Sebuah gambar POV pelacakan cepat melalui gang cyberpunk yang kotor dan diterangi lampu neon di malam hari. Hujan membasahi trotoar, memantulkan cahaya iklan holografik. Suara langkah kaki yang cepat dan napas berat mendominasi audio. Tiba-tiba, kamera berputar ke gambar pelacakan lateral mengikuti protagonis yang gesit (seorang wanita dengan jaket berkerudung) saat ia melompati peti-peti yang dibuang, dikejar oleh dua drone keamanan lapis baja. Tembakan laser melesat, diiringi oleh SFX "piu-piu" yang tajam dan deru drone. Musik elektronik berenergi tinggi yang berdenyut mendorong aksi ke depan. Dia menyelam melalui celah sempit; kamera mengikuti dengan mulus, berakhir dengan efek kamera goyang saat dia mendarat, terengah-engah.`,
  },
  {
    id: '8',
    title: 'Hewan di Alam: Beruang dan Sungai',
    videoUrl: staticFilesUrl + 'Animals_in_Nature_Bear_and_River.mp4',
    description: `Sebuah gambar lebar dari sungai gunung yang jernih dan deras saat senja, dikelilingi oleh hutan pinus yang lebat. Kamera perlahan memperbesar untuk mengungkapkan seekor beruang grizzly besar yang megah berdiri setinggi lutut di jeram, dengan ahli menangkap salmon. Suara air yang deras menonjol, disertai dengan percikan sesekali saat beruang bergerak. Beruang itu mengeluarkan geraman rendah dan puas setelah menangkap seekor ikan, lalu perlahan-lahan berjalan ke tepi untuk memakan tangkapannya. Kicauan samar burung tak terlihat dan jangkrik di kejauhan memenuhi latar belakang.`,
  },
  {
    id: '9',
    title: 'Ketenangan Kyoto Dari Adegan ke Kartu Pos',
    videoUrl: staticFilesUrl + 'Kyoto_Serenity_From_Scene_to_Postcard.mp4',
    description: `Cahaya pagi yang lembut memandikan jalan setapak yang tenang di Kyoto, diapit oleh pohon-pohon ceri kuno yang berbonggol-bonggol yang kelopak merah mudanya yang lembut melayang perlahan ke tanah. Sekawanan kecil rusa sika liar, dengan mata yang lembut dan tanduk beludru, dengan anggun berkeliaran di antara pepohonan, sesekali menggigit bunga yang jatuh. Sebuah gambar pelacakan yang meluncur lambat mengikuti seekor rusa yang sangat anggun saat ia menundukkan kepalanya untuk menggigit. Satu-satunya suara adalah gemerisik daun yang lembut, "ketukan" lembut kelopak bunga yang jatuh, dan "hirupan" serta "kunyahan" lembut sesekali dari rusa. Lonceng kuil yang samar dan jauh berdentang, menambah suasana yang tenang. Saat rusa mengangkat kepalanya, menatap langsung ke kamera dengan rasa ingin tahu yang tenang, kamera memulai penarikan yang lambat dan disengaja. Adegan yang hidup secara halus melembut dan merata, warnanya bergeser ke gaya ilustrasi yang sedikit tidak jenuh, saat bingkai putih yang tajam secara bertahap muncul di sekitar bingkai, membingkai gambar yang sekarang statis. Suara sekitar perlahan memudar, digantikan oleh dentingan senar koto tunggal yang lembut dan jauh, menahan nadanya. Ditumpangkan dengan rapi dalam font klasik dan elegan, kata-kata "Kyoto, Japan - Spring Serenity" muncul di bagian bawah kartu pos.`,
  },
  {
    id: '10',
    title: 'Piknik Karakter Berbulu di Hutan Jamur',
    videoUrl:
      staticFilesUrl + 'Fluffy_Characters_Picnic_in_a_Mushroom_Forest.mp4',
    description: `Stop Motion Karakter Berbulu: Sebuah tempat terbuka di hutan yang cerah dan aneh di mana jamur-jamur besar berwarna-warni tumbuh. Dua makhluk mirip tupai berbulu yang menggemaskan dengan mata besar dan ingin tahu sedang piknik. Salah satunya, yang mengenakan syal rajutan kecil, mencoba membuka stoples "Selai Kacang," membuat suara "geraman" lembut yang frustrasi dan suara "terengah-engah" kecil. Kamera mengambil gambar dari jarak menengah, lalu perlahan memperbesar stoples yang sulit dibuka itu. Yang lainnya, makhluk yang lebih berbulu dengan bunga di belakang telinganya, terkikik pelan, lalu berkata dengan suara manis dan bernada tinggi, "Butuh bantuan, Squiggle?" Sebuah lagu seruling yang lembut dan merdu diputar sepanjang waktu.`,
  },
];