import React, { useState, useEffect } from 'react';

export default function Shimmer ({ width, height }){
  const [shimmerWidth, setShimmerWidth] = useState('50%'); // Initial width
  const [shimmerHeight, setShimmerHeight] = useState('100%'); // Initial height  
  // Update shimmer dimensions whenever width or height changes
  useEffect(() => {
    setShimmerWidth(width);
    setShimmerHeight(height);    
  }, [width, height]);

  return (
    <div className="shimmer-container" style={{ width: shimmerWidth, height: shimmerHeight }}>
      <div className="shimmer mt-1"></div>
    </div>
  );
};