const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Team layout gap & margin
content = content.replace("marginBottom: '40px'", "marginBottom: '20px'");
content = content.replace("gap: '32px'", "gap: '20px'");

// 2. USP cards 4 cols to 2 cols
content = content.replace("gridTemplateColumns: 'repeat(4, 1fr)'", "gridTemplateColumns: 'repeat(2, 1fr)'");
content = content.replace("gap: '16px'", "gap: '24px'");
// USP card padding
content = content.replace(/padding:'24px'/g, "padding:'20px'");

// 3. Revenue grid margin and padding
content = content.replace("marginTop: '40px'", "marginTop: '20px'");
content = content.replace(/padding:'32px'/g, "padding:'20px'");

// 4. Change all --coral to --coral-dark for inline text styles where appropriate
// We'll just replace 'var(--coral)' with 'var(--coral-dark)' in h1, h2, b, and span texts
content = content.replace(/color:'var\(--coral\)'/g, "color:'var(--coral-dark)'");
content = content.replace(/color: 'var\(--coral\)'/g, "color: 'var(--coral-dark)'");
content = content.replace(/color="var\(--coral\)"/g, 'color="var(--coral-dark)"');

// Make specific h1, h2 and headers use coral-dark
content = content.replace(/<h2(.*?)>(.*?)<\/h2>/g, (match, p1, p2) => {
    if (!p1.includes('color')) {
        return `<h2${p1} style={{color: 'var(--coral-dark)'}}>${p2}</h2>`;
    }
    return match;
});

// Also SectionDivider
content = content.replace(/color:'var\(--ink\)'/g, "color:'var(--coral-dark)'"); // wait, ink is white! If I do this, all ink headers become coral. That's what they asked: "Các phần tiêu đề với các phần in đậm nên là màu hồng đậm hơn"

fs.writeFileSync('src/App.jsx', content);
