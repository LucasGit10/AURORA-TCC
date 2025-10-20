// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuroraLandingPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogin = () => {
    router.push('/login');
  };

  const features = [
    {
      icon: '🧠',
      title: "IA Avançada",
      description: "Algoritmos de machine learning treinados com milhões de casos médicos"
    },
    {
      icon: '⚡',
      title: "Diagnóstico Rápido",
      description: "Resultados em segundos, acelerando o processo de tomada de decisão"
    },
    {
      icon: '🛡️',
      title: "Segurança Máxima",
      description: "Dados criptografados e compliance total com HIPAA e LGPD"
    },
    {
      icon: '👥',
      title: "Colaboração",
      description: "Compartilhamento seguro de casos entre equipes médicas"
    }
  ];

  const benefits = [
    "Redução de 40% no tempo de diagnóstico",
    "Acurácia de 95% em diagnósticos preliminares",
    "Integração com principais sistemas de saúde",
    "Suporte 24/7 para equipes médicas",
    "Atualizações contínuas da base de conhecimento"
  ];

  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      role: "Cardiologista - Hospital Albert Einstein",
      text: "O AURORA revolucionou nossa forma de trabalhar. Diagnósticos mais precisos em 70% menos tempo.",
      rating: 5
    },
    {
      name: "Dra. Ana Costa",
      role: "Radiologista - Sírio-Libanês",
      text: "A ferramenta mais intuitiva que já usei. A IA realmente entende o contexto clínico.",
      rating: 5
    }
  ];

  if (!isMounted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            border: '4px solid #2563eb',
            borderTop: '4px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#4b5563' }}>Carregando AURORA...</p>
        </div>
        
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
        borderBottom: '1px solid #dbeafe',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              🏥
            </div>
            <span style={{
              fontSize: '24px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              AURORA
            </span>
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#features" style={{ 
              color: '#374151', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease',
              fontWeight: '500'
            }}>
              Recursos
            </a>
            <a href="#benefits" style={{ 
              color: '#374151', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease',
              fontWeight: '500'
            }}>
              Vantagens
            </a>
            <a href="#testimonials" style={{ 
              color: '#374151', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease',
              fontWeight: '500'
            }}>
              Depoimentos
            </a>
            <a href="#contact" style={{ 
              color: '#374151', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease',
              fontWeight: '500'
            }}>
              Contato
            </a>
          </nav>

          <button 
            onClick={handleLogin}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.2)';
            }}
          >
            Fazer Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: '128px', 
        paddingBottom: '80px', 
        paddingLeft: '24px', 
        paddingRight: '24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 20px',
                borderRadius: '20px',
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                fontSize: '14px',
                fontWeight: '500',
                width: 'fit-content'
              }}>
                ⚡ Revolucionando o Diagnóstico Médico
              </div>
              
              <h1 style={{
                fontSize: '52px',
                fontWeight: 'bold',
                color: '#111827',
                lineHeight: '1.1',
                margin: 0
              }}>
                Diagnóstico Preciso com{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  IA Avançada
                </span>
              </h1>
              
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                lineHeight: '1.7',
                margin: 0
              }}>
                AURORA é seu assistente inteligente para diagnósticos médicos mais rápidos, 
                precisos e confiáveis. Potencialize sua prática médica com tecnologia de ponta.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', paddingTop: '8px' }}>
                <button style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                }}
                >
                  Começar Agora
                </button>
                
                <button style={{
                  border: '2px solid #2563eb',
                  color: '#2563eb',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2563eb';
                }}
                >
                  Ver Demonstração
                </button>
              </div>
            </div>
            
            <div style={{
              position: 'relative',
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '12px',
                padding: '24px',
                color: 'white'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: '#ef4444', 
                      borderRadius: '50%'
                    }}></div>
                    <div style={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: '#f59e0b', 
                      borderRadius: '50%'
                    }}></div>
                    <div style={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: '#10b981', 
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <div style={{ fontSize: '18px' }}>💬</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '16px',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Analisando sintomas: Febre, tosse, dor de cabeça...</p>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '16px',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Diagnóstico Preliminar:</p>
                    <p style={{ margin: '4px 0', fontSize: '13px', opacity: 0.9 }}>🦠 Infecção respiratória viral (85% de confiança)</p>
                    <p style={{ margin: '4px 0', fontSize: '13px', opacity: 0.9 }}>💊 Recomendações: Repouso, hidratação, monitoramento</p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      padding: '12px',
                      textAlign: 'center',
                      fontSize: '12px',
                      opacity: 0.9
                    }}>
                      Análise de Risco: Baixo
                    </div>
                    <div style={{
                      flex: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      padding: '12px',
                      textAlign: 'center',
                      fontSize: '12px',
                      opacity: 0.9
                    }}>
                      Urgência: Moderada
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos de destaque */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                backgroundColor: '#10b981',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                boxShadow: '0 4px 8px rgba(16, 185, 129, 0.3)'
              }}>
                +95% Precisão
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '-12px',
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)'
              }}>
                📊 Machine Learning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ 
        padding: '100px 24px', 
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px'
            }}>
              Tecnologia que{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Transforma
              </span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Recursos avançados desenvolvidos para otimizar seu fluxo de trabalho e melhorar a precisão diagnóstica
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  padding: '32px 24px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0,
                  fontSize: '15px'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={{ 
        padding: '100px 24px', 
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px'
            }}>
              Vantagens Comprovadas
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#bfdbfe',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Resultados reais que fazem a diferença na prática clínica diária
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '16px'
                }}
              >
                <div style={{ 
                  color: '#10b981', 
                  fontSize: '20px', 
                  marginTop: '2px',
                  flexShrink: 0
                }}>✓</div>
                <p style={{
                  fontSize: '17px',
                  color: 'white',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            padding: '48px 32px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #bfdbfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>40%</div>
                <div style={{ color: '#bfdbfe', fontSize: '18px', fontWeight: '500' }}>Mais Rápido</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #bfdbfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>95%</div>
                <div style={{ color: '#bfdbfe', fontSize: '18px', fontWeight: '500' }}>Precisão</div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #bfdbfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>24/7</div>
                <div style={{ color: '#bfdbfe', fontSize: '18px', fontWeight: '500' }}>Disponibilidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ 
        padding: '100px 24px', 
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px'
            }}>
              Confiado por{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Especialistas
              </span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              O que os profissionais de saúde dizem sobre o AURORA
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                style={{
                  background: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)',
                  borderRadius: '16px',
                  padding: '40px 32px',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#f59e0b', fontSize: '20px', marginRight: '4px' }}>★</span>
                  ))}
                </div>
                <p style={{
                  color: '#374151',
                  fontSize: '17px',
                  fontStyle: 'italic',
                  lineHeight: '1.7',
                  marginBottom: '24px'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{ fontWeight: '600', color: '#111827', fontSize: '16px' }}>{testimonial.name}</div>
                  <div style={{ color: '#2563eb', fontSize: '14px' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{ 
        padding: '100px 24px', 
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Pronto para Revolucionar seu Diagnóstico?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#bfdbfe',
            marginBottom: '48px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Junte-se a milhares de profissionais de saúde que já confiam no AURORA
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '24px' }}>
            <button style={{
              backgroundColor: 'white',
              color: '#2563eb',
              padding: '18px 36px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            >
              Solicitar Demonstração
            </button>
            <button 
              onClick={handleLogin}
              style={{
                border: '2px solid white',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Fazer Login
            </button>
          </div>
          
          <div style={{ color: '#93c5fd', fontSize: '14px' }}>
            ⚡ Teste gratuito de 30 dias • Sem compromisso • Suporte dedicado
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#111827', 
        color: 'white', 
        padding: '60px 24px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  🏥
                </div>
                <span style={{ fontSize: '22px', fontWeight: 'bold' }}>AURORA</span>
              </div>
              <p style={{ color: '#9ca3af', margin: 0, lineHeight: '1.6' }}>
                Assistente inteligente de diagnóstico médico powered by AI.
              </p>
            </div>
            
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '20px', fontSize: '16px' }}>Produto</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Recursos</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Preços</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Casos de Uso</a></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '20px', fontSize: '16px' }}>Empresa</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Sobre</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Blog</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '20px', fontSize: '16px' }}>Contato</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
                <li style={{ marginBottom: '12px' }}>contato@aurora-med.com</li>
                <li style={{ marginBottom: '12px' }}>+55 (11) 99999-9999</li>
                <li style={{ marginBottom: '12px' }}>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '32px',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '14px'
          }}>
            <p style={{ margin: 0 }}>&copy; 2024 AURORA Medical AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AuroraLandingPage;