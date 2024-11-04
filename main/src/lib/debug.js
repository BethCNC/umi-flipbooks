export const debugAssets = (assets) => {
    console.group('Asset Debug Info');
    Object.entries(assets).forEach(([key, value]) => {
      console.log(`${key}:`, value);
      const img = new Image();
      img.onload = () => console.log(`✅ ${key} loaded successfully`);
      img.onerror = () => console.error(`❌ ${key} failed to load`);
      img.src = value;
    });
    console.groupEnd();
  };