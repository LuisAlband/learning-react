// @ts-check
//Test mas importante END-TO-END
//COMPROBAR QUE SE HA RENDERIZADO TEXTO E IMAGEN
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = `http://localhost:5173/`
const CAT_PREFIX_IMAGE_URL  = `https://cataas.com/cat/says/`

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph') //una <p>
  const img = await page.getByRole('img') //una <img>

  const textContent = await text.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy
 
});