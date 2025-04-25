import React from 'react';
import { Link } from 'react-router-dom';
import './Studentdash.css';
const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  color: '#333',
  textDecoration: 'none',
  fontWeight: '500'
};

const iconStyle = {
  marginRight: '10px',
  fontSize: '18px'
};

const Studentdashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}>
      {/* Left Sidebar */}
      <div style={{ width: '210px', borderRight: '1px solid #eee' }}>
        {/* App Logo and Welcome Section */}
        <div style={{ 
          background: 'linear-gradient(to right, #ff7e5f, #6e2b5a)', 
          color: 'white', 
          padding: '20px',
          height: '150px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
            <h2 style={{ margin: '0', fontSize: '20px', fontWeight: 'bold' }}>Smart Care</h2>
          </div>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
            <p style={{ margin: '0', fontSize: '14px' }}>Good Morning</p>
            <h3 style={{ margin: '5px 0 0 0', fontSize: '18px' }}>Dr. nadrawertani</h3>
          </div>
          <div style={{ 
            position: 'absolute', 
            width: '200px', 
            height: '200px', 
            backgroundColor: '#ff7e5f', 
            borderRadius: '50%', 
            right: '-100px', 
            top: '-70px',
            zIndex: 0 
          }}></div>
        </div>

        {/* Navigation Menu */}
        {/* Navigation Menu */}
<div style={{ padding: '20px 0' }}>
  <Link to="/dashboard" style={linkStyle}>
    <span style={iconStyle}>📈</span> Dashboard
  </Link>
  <Link to="/test-usercrud" style={linkStyle}>
    <span style={iconStyle}>👥</span> admin
  </Link>
   
  
  <Link to="/patients" style={{ ...linkStyle, backgroundColor: '#f8f9fa' }}>
    <span style={iconStyle}>👥</span> Patients
  </Link>
  <Link to="/calendar" style={linkStyle}>
    <span style={iconStyle}>📅</span> Calendar
  </Link>
  <Link to="/settings" style={linkStyle}>
    <span style={iconStyle}>⚙️</span> Settings
  </Link>
  <Link to="/support" style={linkStyle}>
    <span style={iconStyle}>💬</span> Support
  </Link>
  <Link to="/equipments" style={linkStyle}>
    <span style={iconStyle}>🧰</span> Équipement
  </Link>
  <Link to="/personnels" style={linkStyle}>
    <span style={iconStyle}>👨‍⚕️</span> Personnel
  </Link>

  {/* 🏥 New Hospital Links */}
  <Link to="/hospitals" style={linkStyle}>
    <span style={iconStyle}>🏨</span> Hôpitaux
  </Link>
  <Link to="/hospital-info" style={linkStyle}>
    <span style={iconStyle}>ℹ️</span> Info Hôpital
  </Link>
  <Link to="/hospitalized-patients" style={linkStyle}>
    <span style={iconStyle}>🛌</span> Patients Hospitalisés
  </Link>
  <Link to="/add-patient" style={linkStyle}>
    <span style={iconStyle}>➕</span> Ajouter Patient
  </Link>
  {/* Dans votre composant React */}
<Link to="/medical-records" style={linkStyle}>
  <span style={iconStyle}>📁</span> Dossier Médical
</Link>

</div>

        </div>
      

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {/* Top Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '15px 30px',
          borderBottom: '1px solid #eee'
        }}>
          {/* Search Bar */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            backgroundColor: '#f8f9fa',
            padding: '8px 15px',
            borderRadius: '4px',
            width: '300px'
          }}>
            <span style={{ color: '#666', marginRight: '8px' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search patients here ..." 
              style={{ 
                border: 'none', 
                background: 'transparent', 
                outline: 'none',
                width: '100%'
              }} 
            />
          </div>

          {/* User Profile */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '35px', 
              height: '35px', 
              backgroundColor: '#eee', 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 10px',
              position: 'relative'
            }}>
              <span>✉️</span>
              <div style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '-5px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#ff7e5f',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '10px',
                fontWeight: 'bold'
              }}>2</div>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginLeft: '15px',
              padding: '5px',
              cursor: 'pointer'
            }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                backgroundColor: '#ddd',
                marginRight: '8px',
                overflow: 'hidden'
              }}>
                <div style={{ fontSize: '26px', textAlign: 'center', lineHeight: '36px' }}>👨‍⚕️</div>
              </div>
              <div style={{ marginRight: '5px' }}>
                <div style={{ fontWeight: '500' }}>Dr. John Doe</div>
              </div>
              <span>▼</span>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div style={{ padding: '15px 30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#666' }}>
            <Link to="/patients" style={{ color: '#666', textDecoration: 'none' }}>Patients</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span>Mr. Jesse Wynn</span>
          </div>
        </div>

        {/* Patient Information */}
        <div style={{ padding: '0 30px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '40px' }}>
            {/* Patient Avatar */}
            <div style={{ marginRight: '20px' }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                backgroundColor: '#d1e0e6',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '80px', color: '#333' }}>👨</div>
              </div>
            </div>

            {/* Patient Details */}
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#666', fontWeight: 'normal' }}>Patient</h4>
              <h2 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>Mr. Jesse Wynn</h2>
              
              <button style={{ 
                backgroundColor: '#f8f9fa', 
                border: '1px solid #eee', 
                borderRadius: '20px', 
                padding: '8px 18px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                VIEW PROFILE
              </button>
            </div>

            {/* Patient Attributes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px 30px', marginLeft: 'auto' }}>
              {/* Row 1 */}
              <div>
                <div style={{ color: '#666', fontSize: '13px', marginBottom: '3px' }}>Sex:</div>
                <div style={{ fontWeight: '500' }}>Male</div>
              </div>
              <div>
                <div style={{ color: '#666', fontSize: '13px', marginBottom: '3px' }}>Check-in:</div>
                <div style={{ fontWeight: '500' }}>24 Feb, 2020</div>
              </div>
              
              {/* Row 2 */}
              <div>
                <div style={{ color: '#666', fontSize: '13px', marginBottom: '3px' }}>Age:</div>
                <div style={{ fontWeight: '500' }}>32</div>
              </div>
              <div>
                <div style={{ color: '#666', fontSize: '13px', marginBottom: '3px' }}>Dept:</div>
                <div style={{ fontWeight: '500' }}>Cardiology</div>
              </div>
              
              {/* Row 3 */}
              <div>
                <div style={{ color: '#666', fontSize: '13px', marginBottom: '3px' }}>Blood:</div>
                <div style={{ fontWeight: '500' }}>B+</div>
              </div>
              <div>
                <div style={{ color: '#666', fontSize: '13px', marginBottom: '3px' }}>Bed #:</div>
                <div style={{ fontWeight: '500' }}>0747</div>
              </div>
            </div>
          </div>

          {/* Vitals Display */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
            {/* SYS Card */}
            <div style={{ 
              backgroundColor: 'black', 
              borderRadius: '12px', 
              padding: '20px', 
              width: '160px',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: 'white', fontWeight: '500' }}>SYS</span>
                <span style={{ color: '#ff6b6b', fontSize: '20px' }}>♥</span>
              </div>
              <div style={{ 
                fontSize: '40px', 
                fontWeight: 'bold', 
                color: 'white', 
                margin: '10px 0 5px',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                123 <span style={{ fontSize: '14px', marginLeft: '5px', color: '#999', fontWeight: 'normal' }}>mmHg</span>
              </div>

              {/* Mini Chart */}
              <div style={{ marginTop: '20px', height: '60px', position: 'relative' }}>
                <div style={{ color: '#666', fontSize: '10px', position: 'absolute', left: '0', top: '0' }}>160</div>
                <div style={{ color: '#666', fontSize: '10px', position: 'absolute', left: '0', top: '20px' }}>140</div>
                <div style={{ color: '#666', fontSize: '10px', position: 'absolute', left: '0', top: '40px' }}>120</div>
                
                {/* Chart line */}
                <svg width="100%" height="60" style={{ position: 'absolute', top: '0', left: '25px' }}>
                  <line x1="0%" y1="0" x2="100%" y2="0" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="0%" y1="20" x2="100%" y2="20" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="0%" y1="40" x2="100%" y2="40" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
                  
                  <path 
                    d="M0,20 L15,20 L30,30 L45,40 L60,20 L75,20 L90,20" 
                    fill="none" 
                    stroke="#ff6b6b" 
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="20" r="3" fill="#ff6b6b" />
                  <circle cx="60" cy="20" r="3" fill="#ff6b6b" />
                  <circle cx="90" cy="20" r="3" fill="#ff6b6b" />
                </svg>
              </div>
            </div>

            {/* DIA Card */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '20px', 
              width: '160px',
              border: '1px solid #eee',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: '500' }}>DIA</span>
                <span style={{ color: '#ff9f43', fontSize: '20px', opacity: '0.5' }}>♥</span>
              </div>
              <div style={{ 
                fontSize: '40px', 
                fontWeight: 'bold', 
                margin: '10px 0 5px',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                79 <span style={{ fontSize: '14px', marginLeft: '5px', color: '#999', fontWeight: 'normal' }}>mmHg</span>
              </div>

              {/* Mini Chart */}
              <div style={{ marginTop: '20px', height: '60px', position: 'relative' }}>
                <div style={{ color: '#ddd', fontSize: '10px', position: 'absolute', left: '0', top: '0' }}>160</div>
                <div style={{ color: '#ddd', fontSize: '10px', position: 'absolute', left: '0', top: '20px' }}>140</div>
                <div style={{ color: '#ddd', fontSize: '10px', position: 'absolute', left: '0', top: '40px' }}>120</div>
                
                {/* Chart line */}
                <svg width="100%" height="60" style={{ position: 'absolute', top: '0', left: '25px' }}>
                  <line x1="0%" y1="0" x2="100%" y2="0" stroke="#eee" strokeWidth="1" />
                  <line x1="0%" y1="20" x2="100%" y2="20" stroke="#eee" strokeWidth="1" />
                  <line x1="0%" y1="40" x2="100%" y2="40" stroke="#eee" strokeWidth="1" />
                  
                  <path 
                    d="M0,40 L20,40 L40,20 L60,15 L80,20 L100,40" 
                    fill="none" 
                    stroke="#6e2b5a" 
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="40" r="3" fill="#6e2b5a" />
                  <circle cx="40" cy="20" r="3" fill="#6e2b5a" />
                  <circle cx="60" cy="15" r="3" fill="#6e2b5a" />
                  <circle cx="80" cy="20" r="3" fill="#6e2b5a" />
                  <circle cx="100" cy="40" r="3" fill="#6e2b5a" />
                </svg>
              </div>
            </div>

            {/* Pulse Card */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '20px', 
              width: '160px',
              border: '1px solid #eee',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: '500' }}>Pulse</span>
                <span style={{ color: '#ff6b6b', fontSize: '20px' }}>📈</span>
              </div>
              <div style={{ 
                fontSize: '40px', 
                fontWeight: 'bold', 
                margin: '10px 0 5px',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                122 <span style={{ fontSize: '14px', marginLeft: '5px', color: '#999', fontWeight: 'normal' }}>BPM</span>
              </div>
            </div>

            {/* Weight Card */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '20px', 
              width: '160px',
              border: '1px solid #eee',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontWeight: '500' }}>Weight</span>
                <span style={{ color: '#ff9f43', fontSize: '20px' }}>⭕</span>
              </div>
              <div style={{ 
                fontSize: '40px', 
                fontWeight: 'bold', 
                margin: '10px 0 5px',
                display: 'flex',
                alignItems: 'flex-end',
              }}>
                80.0 <span style={{ fontSize: '14px', marginLeft: '5px', color: '#999', fontWeight: 'normal' }}>kgs</span>
              </div>
            </div>

            {/* Systolic Analysis */}
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 15px 0' }}>Systolic Analysis</h4>
              <div style={{ display: 'flex', height: '120px', alignItems: 'flex-end', gap: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingRight: '8px' }}>
                  <div style={{ fontSize: '12px', color: '#999' }}>60</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>40</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>20</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>0</div>
                </div>

                {/* Bar Chart */}
                <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end', gap: '20px' }}>
                  {/* Bar 1 */}
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      height: '40px', 
                      backgroundColor: '#ff7e5f', 
                      borderRadius: '4px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        top: '-20px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}>
                        20<span style={{ fontSize: '12px' }}>%</span>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>0-89</div>
                  </div>

                  {/* Bar 2 */}
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      height: '80px', 
                      backgroundColor: '#6e2b5a', 
                      borderRadius: '4px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        top: '-20px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}>
                        35<span style={{ fontSize: '12px' }}>%</span>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>90-119</div>
                  </div>

                  {/* Bar 3 */}
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      height: '100px', 
                      backgroundColor: '#a8d0e6', 
                      borderRadius: '4px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        top: '-20px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}>
                        53<span style={{ fontSize: '12px' }}>%</span>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>140-159</div>
                  </div>

                  {/* Bar 4 */}
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      height: '60px', 
                      backgroundColor: '#e8dcdb', 
                      borderRadius: '4px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute', 
                        top: '-20px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}>
                        30<span style={{ fontSize: '12px' }}>%</span>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>150-500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ECG Data */}
          <div style={{ marginBottom: '30px' }}>
            <h3>ECG Data</h3>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '20px', 
              border: '1px solid #eee',
              height: '100px',
              position: 'relative'
            }}>
              {/* Grid Lines */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`h-${i}`} style={{ 
                    position: 'absolute', 
                    left: 0, 
                    right: 0, 
                    top: `${i * 10}%`, 
                    height: '1px', 
                    backgroundColor: '#f0f0f0' 
                  }} />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`v-${i}`} style={{ 
                    position: 'absolute', 
                    top: 0, 
                    bottom: 0, 
                    left: `${i * 10}%`, 
                    width: '1px', 
                    backgroundColor: '#f0f0f0' 
                  }} />
                ))}
              </div>

              {/* ECG Line */}
              <svg width="100%" height="100%" style={{ position: 'relative', zIndex: 1 }}>
                <path 
                  d="M0,50 C10,50 15,20 20,50 L25,50 L30,10 L35,90 L40,50 L45,50 C50,50 55,20 60,50 L65,50 L70,10 L75,90 L80,50 L85,50 C90,50 95,20 100,50 L105,50 L110,10 L115,90 L120,50 L125,50 C130,50 135,20 140,50 L145,50 L150,10 L155,90 L160,50 L165,50 C170,50 175,20 180,50 L185,50 L190,10 L195,90 L200,50 L205,50 C210,50 215,20 220,50 L225,50 L230,10 L235,90 L240,50 L245,50 C250,50 255,20 260,50 L265,50 L270,10 L275,90 L280,50 L285,50 C290,50 295,20 300,50 L305,50 L310,10 L315,90 L320,50 L325,50 C330,50 335,20 340,50 L345,50 L350,10 L355,90 L360,50 L365,50 C370,50 375,20 380,50 L385,50 L390,10 L395,90 L400,50 L405,50"
                  fill="none" 
                  stroke="#ff6b6b" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentdashboard;