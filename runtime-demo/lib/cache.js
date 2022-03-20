import fs from 'fs'
import { join } from 'path'
import sizeOf from 'image-size'
import '../../../cgi-bin/DIVOPS_RUNTIME_SCRIPT'
import '../../../cgi-bin/DIVOPS_EMBED_SCRIPT'

export const availableScripts = new Set([
    'CACHED_RUNTIME_SCRIPT',
    'CACHED_EMBED_SCRIPT'
  ]);

const cache = {}

export function getScriptPreviewImage(scriptName) {
  if (cache[scriptName]) {
    return cache[scriptName]
  }

  const previewScriptImageSrc = fs
    .readdirSync(join(process.cwd(), 'public', 'store'))
    .find((f) => f.includes(scriptName))

  if (!previewScriptImageSrc) {
    return null
  }

  const dimensions = sizeOf(
    join(process.cwd(), 'public', 'store', previewScriptImageSrc)
  )

  const scriptImageInfo = {
    src: `/store/${previewScriptImageSrc}`,
    isGIF: previewImageSrc.split('.').pop() == 'gif',
    width: dimensions.width,
    height: dimensions.height,
  }

  cache[scriptName] = scriptImageInfo

  return scriptImageInfo
}