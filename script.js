function generateQuote() {
    var quotes = [
        "Walau apa pun ujian yang kau lalui, yakinlah bahawa Allah sentiasa bersama orang yang sabar dan tidak pernah meninggalkan hamba-Nya yang bergantung kepada-Nya.",
        "Jangan bersedih atas sesuatu yang hilang, kerana Allah akan gantikan dengan sesuatu yang lebih baik bila tiba masanya.",
        "Jika doamu belum dimakbulkan, itu bukan bermakna Allah tak dengar — Dia sedang susun yang terbaik, tepat pada waktunya.",
        "Berjalanlah perlahan, tapi teruskan langkahmu. Allah melihat usaha, bukan hanya hasil.",
        "Kadangkala Allah sembunyikan matahari, lalu turunkan hujan. Kita menangis mencari cahaya, rupanya Allah ingin hadiahkan pelangi.",
        "Bila kau rasa lemah dan tak mampu teruskan, ingatlah — Allah yang pegang hatimu dan Dia Maha Menguatkan.",
        "Setiap air mata yang jatuh kerana Allah, akan diganti dengan ketenangan yang tidak mampu diberi oleh dunia.",
        "Hidup ini bukan untuk sempurna, tapi untuk sentiasa kembali kepada Allah walau berapa kali jatuh.",
        "Tugasmu bukan untuk tahu bagaimana semuanya akan selesai. Tugasmu hanyalah untuk yakin dan terus melangkah.",
        "Allah tahu bila kau letih. Dia tahu bila kau hampir putus asa. Tapi Dia juga tahu kau mampu bertahan, sebab itu Dia uji.",
    ];
    var randomIndex = Math.floor(Math.random()* quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}
