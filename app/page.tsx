'use client'; // Tells Next.js this code runs in the browser

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Buy Based Apu</h1>
      <button
        onClick={() => {
          // Direct to Uniswap on the Base Ethereum (Layer 2) network
          window.location.href =
            'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6F35720b272BF23832852b13ae9888C706E1a379&chain=base';
        }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#FF5722',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Buy Based Apu
      </button>
    </div>
  );
}
