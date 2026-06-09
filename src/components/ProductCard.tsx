import React from 'react';

interface ProductCardProps {
  name: string;
  style: string;
  occasion: string;
  imageUrl?: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  style,
  occasion,
  imageUrl,
  description,
}) => {
  return (
    <div className="product-card">
      {/* Image Area */}
      <div className="mb-4 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">👔</div>
            <p className="text-sm">圖片區域</p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>

        <div className="space-y-2">
          <div>
            <p className="text-sm text-gray-600">風格</p>
            <p className="text-base text-gray-900 font-medium">{style}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">適用場合</p>
            <p className="text-base text-gray-900 font-medium">{occasion}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">詳細說明</p>
            <p className="text-base text-gray-900 whitespace-pre-wrap">
              {description}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="btn-primary w-full mt-4">
          保存此穿搭
        </button>
      </div>
    </div>
  );
};

export default ProductCard;