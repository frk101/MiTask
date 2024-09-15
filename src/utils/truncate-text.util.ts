export function truncateText(text: string, maxLength: number) {
  // Metin maxLength'ten uzunsa, kısalt ve '...' ekle
  if (text?.length > maxLength) {
    return text?.substring(0, maxLength) + '...';
  }
  // Aksi takdirde metni olduğu gibi döndür
  return text;
}
