async function generatePDF() {
    const { PDFDocument, rgb } = PDFLib;

    // 新しいPDFドキュメントを作成
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    // 順位と座標を指定
    const rankings = [
        { text: document.getElementById("person1").value, x: 100, y: 350, label: "優勝" },
            { text: document.getElementById("person2").value, x: 100, y: 300, label: "準優勝" },
            { text: document.getElementById("person3").value, x: 100, y: 250, label: "3位" },
            { text: document.getElementById("person4").value, x: 100, y: 200, label: "3位" },
            { text: document.getElementById("person5").value, x: 100, y: 150, label: "敢闘賞" },
            { text: document.getElementById("person6").value, x: 100, y: 100, label: "敢闘賞" },
            { text: document.getElementById("person7").value, x: 100, y: 50, label: "敢闘賞" },
            { text: document.getElementById("person8").value, x: 100, y: 20, label: "敢闘賞" },
    ];

    // 各順位の名前をページに追加
    rankings.forEach(rank => {
        page.drawText(`${rank.label}: ${rank.text}`, {
            x: rank.x,
            y: rank.y,
            size: 12,
            color: rgb(0, 0, 0)
        });
    });

    // PDFをBlobとして生成
    const pdfBytes = await pdfDoc.save();
    
    // PDFをダウンロード
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ranking.pdf";
    link.click();
}
