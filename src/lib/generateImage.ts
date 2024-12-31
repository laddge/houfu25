import { readFileSync } from 'fs'
import satori, { type SatoriOptions } from 'satori'
import sharp from 'sharp'

export const generateImage = async (
  bg: string,
  name: string,
  text: string,
) => {
  const fontBuffer = readFileSync('src/lib/ZenKakuGothicNew-Medium.ttf')
  let imgUrl = ''
  try {
    imgUrl = 'data:image/png;base64,' + readFileSync(`static/images/bg${bg}.png`, 'base64')
  } catch(e) {
    console.error(e)
    imgUrl = 'data:image/png;base64,' + readFileSync('static/images/bg0.png', 'base64')
  }

  const options: SatoriOptions = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Zen Kaku New',
        data: fontBuffer,
        weight: 500,
        style: 'normal',
      },
    ],
  }

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${imgUrl})`,
          color: 'white',
          textAlign: 'center',
          padding: '100px 50px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                fontSize: 48,
              },
              children: [
                {
                  type: 'div',
                  props: {
                    children: name + 'の抱負:',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 64,
              },
              children: [
                {
                  type: 'div',
                  props: {
                    children: text,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    options,
  )

  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return png
}
