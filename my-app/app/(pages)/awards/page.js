'use client'
import './awards.css'
import Link from 'next/link'
import Image from 'next/image'
import awards from './data'

export default function AwardsPage() {


  return (
    <div className="awards-container">
      <div className="awards-content">
        <div className="top-nav">
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
        </div>

        <h1 className="awards-header">Our Achievements</h1>

        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-image-container">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={300}
                  height={400}
                  className="award-image"
                />
              </div>
              <div className="award-details">
                <h2 className="award-title">{award.title}</h2>
                <p className="award-year">{award.year}</p>
                <p className="award-description">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 