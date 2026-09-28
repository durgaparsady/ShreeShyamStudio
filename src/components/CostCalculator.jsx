import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function CostCalculator({ onLockQuote }) {
  const [days, setDays] = useState(2);
  const [crewTier, setCrewTier] = useState('standard');
  const [addons, setAddons] = useState({
    drone: true,
    preWedding: true,
    sameDayEdit: false,
    italianAlbum: true
  });

  const baseDayPrices = {
    1: 125000,
    2: 240000,
    3: 340000,
    4: 430000,
    5: 510000
  };

  const formatRupees = (amount) => {
    return '₹' + amount.toLocaleString('en-IN');
  };

  // Calculate pricing
  const baseCost = baseDayPrices[days] || days * 110000;
  const crewUpgradeCost = crewTier === 'grand' ? 45000 * days : 0;
  const droneCost = addons.drone ? 25000 : 0;
  const preWeddingCost = addons.preWedding ? 40000 : 0;
  const sameDayEditCost = addons.sameDayEdit ? 35000 : 0;
  const albumCost = addons.italianAlbum ? 30000 : 0;

  const totalCost = baseCost + crewUpgradeCost + droneCost + preWeddingCost + sameDayEditCost + albumCost;

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLockQuote = () => {
    const quoteSummary = `Custom Quote: ${days} Days (${crewTier === 'grand' ? 'Grand Production' : 'Standard Crew'}) - Total: ${formatRupees(totalCost)}`;
    onLockQuote(quoteSummary);
  };

  return (
    <section className="section calculator-section" id="calculator">
      <div className="container">
        <div className="calc-wrapper">
          <div className="calc-header text-center">
            <div className="section-tag">CUSTOMIZE YOUR COVERAGE</div>
            <h2 className="section-title">
              Interactive Studio <span className="text-gold">Quote Calculator</span>
            </h2>
            <p className="section-subtitle">
              Adjust coverage days and add cinematic features to instantly view your tailored estimate.
            </p>
          </div>

          <div className="calc-grid">
            {/* Controls */}
            <div className="calc-controls">
              
              {/* Event Days Slider */}
              <div className="control-group">
                <div className="control-label-row">
                  <label htmlFor="reactDaysRange">Number of Event Days</label>
                  <span className="control-value-badge">{days} {days === 1 ? 'Day' : 'Days'}</span>
                </div>
                <input 
                  type="range" 
                  id="reactDaysRange"
                  min="1" 
                  max="5" 
                  step="1"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value, 10))}
                  className="custom-slider"
                />
                <div className="range-labels">
                  <span>1 Day</span>
                  <span>2 Days</span>
                  <span>3 Days</span>
                  <span>4 Days</span>
                  <span>5+ Days</span>
                </div>
              </div>

              {/* Crew Size Radio */}
              <div className="control-group">
                <label className="group-title">Camera Crew Tier</label>
                <div className="radio-pill-group">
                  <label className="radio-pill">
                    <input 
                      type="radio" 
                      name="reactCrew" 
                      value="standard" 
                      checked={crewTier === 'standard'}
                      onChange={() => setCrewTier('standard')}
                    />
                    <span className="pill-body">
                      <strong>Standard Signature Crew</strong>
                      <small>2 Senior Photographers + 2 Master Cinematographers</small>
                    </span>
                  </label>

                  <label className="radio-pill">
                    <input 
                      type="radio" 
                      name="reactCrew" 
                      value="grand" 
                      checked={crewTier === 'grand'}
                      onChange={() => setCrewTier('grand')}
                    />
                    <span className="pill-body">
                      <strong>Grand Production (+₹45,000 / day)</strong>
                      <small>3 Senior Photographers + 3 Cinematographers + Lead Creative Director</small>
                    </span>
                  </label>
                </div>
              </div>

              {/* Addons */}
              <div className="control-group">
                <label className="group-title">Cinematic Upgrades &amp; Add-ons</label>
                <div className="addon-checkboxes">
                  
                  <div 
                    className={`checkbox-card ${addons.drone ? 'checked' : ''}`}
                    onClick={() => toggleAddon('drone')}
                  >
                    <div className="check-box-custom">
                      {addons.drone && <Check size={14} strokeWidth={3} />}
                    </div>
                    <div className="checkbox-text">
                      <div className="cb-title">Licensed 4K Cinema Drone</div>
                      <div className="cb-desc">Breathtaking aerial palace vistas &amp; baraat entry</div>
                    </div>
                    <span className="cb-price">+₹25,000</span>
                  </div>

                  <div 
                    className={`checkbox-card ${addons.preWedding ? 'checked' : ''}`}
                    onClick={() => toggleAddon('preWedding')}
                  >
                    <div className="check-box-custom">
                      {addons.preWedding && <Check size={14} strokeWidth={3} />}
                    </div>
                    <div className="checkbox-text">
                      <div className="cb-title">Luxury Pre-Wedding Shoot</div>
                      <div className="cb-desc">1 Dedicated day with styling guidance &amp; teaser</div>
                    </div>
                    <span className="cb-price">+₹40,000</span>
                  </div>

                  <div 
                    className={`checkbox-card ${addons.sameDayEdit ? 'checked' : ''}`}
                    onClick={() => toggleAddon('sameDayEdit')}
                  >
                    <div className="check-box-custom">
                      {addons.sameDayEdit && <Check size={14} strokeWidth={3} />}
                    </div>
                    <div className="checkbox-text">
                      <div className="cb-title">Same-Day Reception Screen Edit</div>
                      <div className="cb-desc">Pheras highlights projected that evening at dinner</div>
                    </div>
                    <span className="cb-price">+₹35,000</span>
                  </div>

                  <div 
                    className={`checkbox-card ${addons.italianAlbum ? 'checked' : ''}`}
                    onClick={() => toggleAddon('italianAlbum')}
                  >
                    <div className="check-box-custom">
                      {addons.italianAlbum && <Check size={14} strokeWidth={3} />}
                    </div>
                    <div className="checkbox-text">
                      <div className="cb-title">Handcrafted Italian Leather Album</div>
                      <div className="cb-desc">Flush-mount museum archival pages (40 Pages)</div>
                    </div>
                    <span className="cb-price">+₹30,000</span>
                  </div>

                </div>
              </div>

            </div>

            {/* Total Summary */}
            <div className="calc-summary">
              <div className="summary-card">
                <div className="summary-badge">ESTIMATED INVESTMENT</div>

                <div className="summary-amount-box">
                  <div className="total-label">Total Custom Package</div>
                  <div className="total-price">{formatRupees(totalCost)}</div>
                  <div className="total-tax-note">
                    *All professional editing, color grading & equipment included
                  </div>
                </div>

                <div className="summary-breakdown">
                  <div className="breakdown-row">
                    <span>{days} {days === 1 ? 'Day' : 'Days'} Studio Coverage</span>
                    <span>{formatRupees(baseCost)}</span>
                  </div>

                  {crewTier === 'grand' && (
                    <div className="breakdown-row">
                      <span>Grand Crew Upgrade ({days} Days)</span>
                      <span>+{formatRupees(crewUpgradeCost)}</span>
                    </div>
                  )}

                  {addons.drone && (
                    <div className="breakdown-row">
                      <span>Licensed 4K Cinema Drone</span>
                      <span>+₹25,000</span>
                    </div>
                  )}

                  {addons.preWedding && (
                    <div className="breakdown-row">
                      <span>Luxury Pre-Wedding Shoot</span>
                      <span>+₹40,000</span>
                    </div>
                  )}

                  {addons.sameDayEdit && (
                    <div className="breakdown-row">
                      <span>Same-Day Reception Edit</span>
                      <span>+₹35,000</span>
                    </div>
                  )}

                  {addons.italianAlbum && (
                    <div className="breakdown-row">
                      <span>Handcrafted Italian Album</span>
                      <span>+₹30,000</span>
                    </div>
                  )}
                </div>

                <button 
                  className="btn btn-gold btn-block"
                  onClick={handleLockQuote}
                >
                  <span>Lock In This Custom Quote</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </button>

                <p className="summary-guarantee">
                  <ShieldCheck size={18} color="#b8860b" />
                  <span>100% Date Protection &amp; Backup Equipment Guarantee</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
