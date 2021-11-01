//API Rate Limiting (Token Bucket Algorithm)

class TokenBucket {
	constructor(maxBucketSize, refillRate) {
		this.maxBucketSize = maxBucketSize;
		this.refillRate = refillRate;

		this.currentBucketSize = maxBucketSize;
		this.lastRefillTimestamp = new Date().getTime();
		console.log(this.maxBucketSize, this.refillRate, this.lastRefillTimestamp);
	}

	allowRequest(token) {
		this.refill();
		if (this.currentBucketSize > token) {
			this.currentBucketSize -= token;
			return true;
		}
		return false;
	}

	refill() {
		let now = new Date().getTime();
		let tokenToAdd = ((now - this.lastRefillTimestamp) * this.refillRate) / 1e9;
		console.log(tokenToAdd);
		this.currentBucketSize = Math.abs(Math.min(this.currentBucketSize + tokenToAdd, this.maxBucketSize));
		this.lastRefillTimestamp = now;
	}

	getCurrentTokenSize() {
		return this.currentBucketSize;
	}
}

const tokenBucket = new TokenBucket(10, 10);
tokenBucket.allowRequest(6);
console.log(tokenBucket.getCurrentTokenSize());
tokenBucket.allowRequest(5);
console.log(tokenBucket.getCurrentTokenSize());
