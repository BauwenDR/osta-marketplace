import { MarketplaceExtension, MarketPlaceExtensionDetails } from '../types'
import axios from 'axios'

async function getExtensions(name: string): Promise<MarketplaceExtension[]> {
  const response = await axios.get(`/api/extensions?nameContains=${name}`)
  return response.data
}

async function getExtensionById(id: string): Promise<MarketPlaceExtensionDetails> {
  const response = await axios.get(`/api/extensions/${id}`)
  return response.data
}

export default { getExtensions, getExtensionById }
