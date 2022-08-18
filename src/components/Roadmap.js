import '../App.css';

function Roadmap() {
  return (
      <div className='roadmap'>
        <div className='roadmap-canvas'>
          <h2>The Roadmap</h2>
          <div className='roadmap-item'>
            <h3>Phase 1</h3>
            <h4>Pre-mint Launch</h4>
            <ul>
              <li>Community building</li>
              <li>Charity promotion</li>
              <li>Whitelist giveaway</li>
            </ul>
          </div>
          <div className='roadmap-item'>
            <h4>Mint</h4>
            <ul>
              <li>20% of sales go to charity</li>
              <li>30% of sales go to development team</li>
              <li>50% of sales go to Whitsteen</li>
              <li>Discord art discussion/interpretation event</li>
            </ul>
          </div>
          <div className='roadmap-item'>
            <h3>Phase 2</h3>
            <ul>
              <li>If 100% of the previous collection sells out, a new collection is unlocked, and the steps outlined above are refined and repeated</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Roadmap;