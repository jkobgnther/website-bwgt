import Image from 'next/image'

export function StartPageHeader() {
  return (
    <header
      className="relative mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 flex items-center justify-center start-header-root"
    >
      {/* Desktop / wide layout: text + header_1 + header_2, centered */}
      <div
        className="relative start-header-desktop"
        style={{
          // Base position of the whole composition (text + images)
          top: '200px',
          left: '0px',
          // Fine-tune centering offset – play with these two values
          transform: 'translate(-180px, 0px)',
        }}
      >
        {/* Central anchor: text block */}
        <div
          className="relative flex flex-col items-start"
          style={{
            zIndex: 10, // keep text above images
          }}
        >
          {/* Main title and location/person lines */}
          <h1
            className="font-bold text-gray-900 leading-tight"
            style={{
              // Fine-tune font size & line height of the title
              fontSize: '2.2rem', // overall title size
              lineHeight: 1.05, // space between the two lines
              letterSpacing: '0.03em', // tracking
              textAlign: 'left', // align text to the left
            }}
          >
            BEWEGUNGSKOORDINATOR
            <br />
            TEMPELHOF-SCHÖNEBERG
          </h1>

          {/* Name in thin weight, same size */}
          <p
            className="text-gray-900"
            style={{
              fontSize: '2.2rem',
              lineHeight: 1.05,
              letterSpacing: '0.03em',
              textAlign: 'left',
              fontWeight: 300, // thin/light
              marginTop: '0.2em',
            }}
          >
            Max Günther
          </p>
        </div>

        {/* Absolute-positioned header images (now relative to this wrapper) */}

        {/* header_1 – always visible on desktop/tablet */}
        <div
          className="pointer-events-none select-none absolute block"
          style={{
            top: '-550px', // adjust
            left: '-130px', // adjust
            width: '660px', // adjust
            height: '660px', // adjust
          }}
        >
          <Image
            src="/logo/header_1.png"
            alt="Header Grafik 1"
            fill
            className="object-contain"
            sizes="660px"
            quality={100}
            priority
          />
        </div>

        {/* header_2 – only when there is enough space (tablet/desktop) */}
        <div
          className="pointer-events-none select-none absolute block"
          style={{
            top: '-345px', // adjust
            left: '476px', // adjust
            width: '600px', // adjust
            height: '600px', // adjust
          }}
        >
          <Image
            src="/logo/header_2.png"
            alt="Header Grafik 2"
            fill
            className="object-contain"
            sizes="600px"
            quality={100}
          />
        </div>
      </div>

      {/* Narrow layout: text + header_1 (+ purplearrowsquare), centered / adjustable */}
      <div
        className="relative flex flex-col items-center text-center w-full overflow-x-hidden start-header-mobile"
        style={{
          // Offset the whole mobile header block (text + image)
          top: '150px',
          left: '0px',
        }}
      >
        {/* Inner wrapper that we can scale for very small widths */}
        <div className="start-header-mobile-inner relative flex flex-col items-center w-full">
          {/* Text block */}
          <div
            className="relative flex flex-col items-center"
            style={{
              zIndex: 10,
              top: '290px',
              left: '0px',
            }}
          >
            <h1
              className="font-bold text-gray-900 leading-tight"
              style={{
                fontSize: '1.8rem',
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                // Adjust text alignment here: 'center' | 'left' | 'right'
                textAlign: 'center',
              }}
            >
              BEWEGUNGSKOORDINATOR
              <br />
              TEMPELHOF-SCHÖNEBERG
            </h1>
            <p
              className="text-gray-900"
              style={{
                fontSize: '1.8rem',
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                // Match alignment of the title above
                textAlign: 'center',
                fontWeight: 300,
                marginTop: '0.3em',
              }}
            >
              Max Günther
            </p>
          </div>

          {/* header_1 image, centered below/around text */}
          <div
            className="pointer-events-none select-none relative mt-6"
            style={{
              top: '-212px',
              left: '0px',
              width: '450px', // adjust for mobile
              height: '450px',
            }}
          >
            <Image
              src="/logo/header_1.png"
              alt="Header Grafik 1"
              fill
              className="object-contain"
              sizes="450px"
              quality={100}
              priority
            />
          </div>

          {/* purplearrowsquare – mobile only */}
          <div
            className="pointer-events-none select-none relative mt-6"
            style={{
              // Placeholder values – adjust freely
              top: '-240px',
              left: '-170px',
              width: '100px',
              height: '100px',
            }}
          >
            <Image
              src="/logo/purplevertarrowsquare.png"
              alt="Dekoratives violettes Pfeil-Element"
              fill
              className="object-contain"
              sizes="100px"
              quality={100}
            />
          </div>
        </div>
      </div>
    </header>
  )
}


